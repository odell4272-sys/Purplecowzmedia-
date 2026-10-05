'use client';

const LEAD_EMAIL = 'purplecowzmedia@gmail.com';

export default function ContactForm() {
  function submit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `PurpleCowz Media Project Request - ${data.get('business') || data.get('name') || 'Website Lead'}`;
    const body = [
      `Name: ${data.get('name') || ''}`,
      `Business: ${data.get('business') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `Phone: ${data.get('phone') || ''}`,
      `Service: ${data.get('service') || ''}`,
      '',
      'Project Details:',
      data.get('message') || '',
    ].join('\n');
    window.location.href = `mailto:${LEAD_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-grid">
        <label>Name<input required name="name" maxLength={120} autoComplete="name" placeholder="Your name" /></label>
        <label>Business<input required name="business" maxLength={160} autoComplete="organization" placeholder="Company name" /></label>
        <label>Email<input required type="email" name="email" maxLength={200} autoComplete="email" placeholder="you@company.com" /></label>
        <label>Phone<input type="tel" name="phone" maxLength={40} autoComplete="tel" placeholder="Phone number" /></label>
      </div>
      <label>What Do You Need?
        <select name="service" defaultValue="">
          <option value="" disabled>Select a service</option>
          <option>D1 Community Partner Advertising</option>
          <option>Branding & Creative</option>
          <option>Website</option>
          <option>TV / Digital Display Ad</option>
          <option>Print Marketing</option>
          <option>Social Media Creative</option>
          <option>Something Else</option>
        </select>
      </label>
      <label>Tell Us About The Project<textarea name="message" rows="7" maxLength={5000} placeholder="What are you trying to promote?" /></label>
      <button className="btn" type="submit">Send Project Request</button>
      <p className="form-note">
        Submitting opens your email app with the request pre-filled to PurpleCowz Media. If it doesn&apos;t open, email us at{' '}
        <a href={`mailto:${LEAD_EMAIL}`}>{LEAD_EMAIL}</a>.
      </p>
    </form>
  );
}
