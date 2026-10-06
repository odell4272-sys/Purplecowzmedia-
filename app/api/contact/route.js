import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const DEFAULT_TO_EMAIL = 'purplecowzmedia@gmail.com';
const MAX = { name: 120, business: 160, email: 200, phone: 40, message: 5000, service: 80 };

const clean = (value, max) => String(value ?? '').trim().slice(0, max);

// Resend can't send from free mailbox domains, so fall back to the domain verified in Resend.
const VERIFIED_SENDER = 'marketing@purplecowz.com';
const FREE_MAIL_DOMAINS = ['gmail.com', 'googlemail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com', 'aol.com'];
const getSenderAddress = (configured) => {
  const domain = String(configured ?? '').split('@')[1]?.toLowerCase();
  return !domain || FREE_MAIL_DOMAINS.includes(domain) ? VERIFIED_SENDER : configured;
};

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  const name = clean(body.name, MAX.name);
  const business = clean(body.business, MAX.business);
  const email = clean(body.email, MAX.email);
  const phone = clean(body.phone, MAX.phone);
  const message = clean(body.message, MAX.message);
  const services = Array.isArray(body.services)
    ? body.services.slice(0, 10).map((s) => clean(s, MAX.service)).filter(Boolean)
    : [];

  if (!name || !email || !phone || !services.length || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'not_configured' }, { status: 503 });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: `PurpleCowz Website <${getSenderAddress(process.env.CONTACT_FROM_EMAIL)}>`,
      to: process.env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL,
      replyTo: email,
      subject: `New PurpleCowz Lead: ${name}${business ? ` - ${business}` : ''}`,
      text: [
        `Name: ${name}`,
        `Business: ${business || 'Not provided'}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Services: ${services.join(', ')}`,
        '',
        'Project Details:',
        message || 'No additional message provided.',
      ].join('\n'),
    });

    if (error) throw new Error(error.message);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('PurpleCowz contact form error:', error);
    return NextResponse.json({ error: 'Unable to send request' }, { status: 500 });
  }
}
