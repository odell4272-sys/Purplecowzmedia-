const LEAD_EMAIL = process.env.LEAD_EMAIL || 'purplecowzmedia@gmail.com';
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'PurpleCowz Media <onboarding@resend.dev>';

const LIMITS = { name: 120, business: 160, email: 200, phone: 40, service: 120, message: 5000 };

function clean(value, max) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields, humans don't. Pretend success.
  if (clean(body.website, 200)) {
    return Response.json({ ok: true });
  }

  const lead = Object.fromEntries(
    Object.entries(LIMITS).map(([key, max]) => [key, clean(body[key], max)])
  );

  if (!lead.name || !lead.business || !lead.email) {
    return Response.json({ ok: false, error: 'Name, business, and email are required.' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return Response.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { ok: false, configured: false, error: 'Email delivery is not configured yet.' },
      { status: 503 }
    );
  }

  const rows = [
    ['Name', lead.name],
    ['Business', lead.business],
    ['Email', lead.email],
    ['Phone', lead.phone || '—'],
    ['Service', lead.service || '—'],
  ];

  const html = `
    <h2>New Project Request</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows.map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`).join('')}
    </table>
    <h3>Project Details</h3>
    <p style="white-space:pre-wrap">${escapeHtml(lead.message || '—')}</p>
  `;
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\nProject Details:\n${lead.message || '—'}`;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [LEAD_EMAIL],
        reply_to: lead.email,
        subject: `New Project Request — ${lead.business}`,
        html,
        text,
      }),
    });

    if (!res.ok) {
      console.error('Resend error:', res.status, await res.text());
      return Response.json({ ok: false, error: 'Could not send your request.' }, { status: 502 });
    }
  } catch (error) {
    console.error('Resend request failed:', error);
    return Response.json({ ok: false, error: 'Could not send your request.' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
