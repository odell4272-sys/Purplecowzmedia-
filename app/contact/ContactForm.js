'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="success-box">
        <span className="eyebrow">Message Ready</span>
        <h2>Thank You.</h2>
        <p>This demo form is working on the front end. Connect it to your email, CRM or form service before launch to receive submissions automatically.</p>
        <button className="btn" onClick={() => setSent(false)}>Send Another</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-grid">
        <label>Name<input required name="name" placeholder="Your name" /></label>
        <label>Business<input required name="business" placeholder="Company name" /></label>
        <label>Email<input required type="email" name="email" placeholder="you@company.com" /></label>
        <label>Phone<input name="phone" placeholder="Phone number" /></label>
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
      <label>Tell Us About The Project<textarea name="message" rows="7" placeholder="What are you trying to promote?" /></label>
      <button className="btn" type="submit">Send Project Request</button>
    </form>
  );
}
