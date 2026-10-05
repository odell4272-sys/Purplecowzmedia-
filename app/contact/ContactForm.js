'use client';

import { useState } from 'react';

const LEAD_EMAIL = 'purplecowzmedia@gmail.com';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  async function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    setError('');

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        setError(data.error || 'Something went wrong.');
        setStatus('error');
        return;
      }

      form.reset();
      setStatus('sent');
    } catch {
      setError('Network error.');
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="success-box" role="status">
        <span className="eyebrow">Request Received</span>
        <h2>Thank You.</h2>
        <p>Your project request is on its way to the PurpleCowz Media team. We&apos;ll get back to you shortly.</p>
        <button className="btn" onClick={() => setStatus('idle')}>Send Another</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-grid">
        <label>Name<input required name="name" maxLength={120} placeholder="Your name" /></label>
        <label>Business<input required name="business" maxLength={160} placeholder="Company name" /></label>
        <label>Email<input required type="email" name="email" maxLength={200} placeholder="you@company.com" /></label>
        <label>Phone<input type="tel" name="phone" maxLength={40} placeholder="Phone number" /></label>
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
      <div className="form-honeypot" aria-hidden="true">
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      {status === 'error' && (
        <p className="form-error" role="alert">
          {error} Please email us directly at{' '}
          <a href={`mailto:${LEAD_EMAIL}`}>{LEAD_EMAIL}</a>.
        </p>
      )}
      <button className="btn" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send Project Request'}
      </button>
    </form>
  );
}
