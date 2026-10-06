'use client';

import { useState } from 'react';

const LEAD_EMAIL = 'purplecowzmedia@gmail.com';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');

  async function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          business: data.get('business'),
          email: data.get('email'),
          phone: data.get('phone'),
          message: data.get('message'),
          services: [data.get('service')].filter(Boolean),
        }),
      });
      if (!response.ok) throw new Error('Submission failed');
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-form" role="status">
        <h3>Thanks, your request is in.</h3>
        <p className="form-note">We received your project details and will get back to you shortly.</p>
        <button className="btn" type="button" onClick={() => setStatus('idle')}>Send Another Request</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-grid">
        <label>Name<input required name="name" maxLength={120} autoComplete="name" placeholder="Your name" /></label>
        <label>Business<input required name="business" maxLength={160} autoComplete="organization" placeholder="Company name" /></label>
        <label>Email<input required type="email" name="email" maxLength={200} autoComplete="email" placeholder="you@company.com" /></label>
        <label>Phone<input required type="tel" name="phone" maxLength={40} autoComplete="tel" placeholder="Phone number" /></label>
      </div>
      <label>What Do You Need?
        <select required name="service" defaultValue="">
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
      <button className="btn" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send Project Request'}
      </button>
      <p className="form-note" aria-live="polite">
        {status === 'error' ? (
          <>Something went wrong sending your request. Please try again or email us at <a href={`mailto:${LEAD_EMAIL}`}>{LEAD_EMAIL}</a>.</>
        ) : (
          'Your request goes straight to the PurpleCowz Media team.'
        )}
      </p>
    </form>
  );
}
