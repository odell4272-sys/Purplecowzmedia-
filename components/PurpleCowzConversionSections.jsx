'use client';

import { useState } from 'react';


function CheckIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const services = [
  'Website / Landing Page',
  'Branding & Ad Design',
  'D1 Community Advertising',
  'AI Receptionist / Automation',
  'Social Media Marketing',
  'Email & SMS Campaigns',
  'Real Estate Marketing',
  'Something Else'
];

const faqs = [
  {
    q: 'What does PurpleCowz Media do?',
    a: 'We help local businesses stand out with websites, branding, advertising, social media, lead-generation tools, AI receptionist solutions, email and SMS marketing, and community advertising.'
  },
  {
    q: 'Can you build a website for my business?',
    a: 'Yes. We build modern, mobile-friendly websites and landing pages designed to make your business look professional and turn visitors into calls, messages, and leads.'
  },
  {
    q: 'Can you redesign an existing website?',
    a: 'Absolutely. We can improve the look, messaging, layout, calls-to-action, mobile experience, and lead flow without necessarily starting over from scratch.'
  },
  {
    q: 'Do you work only with real estate businesses?',
    a: 'No. Real estate is one of our specialties, but we also work with contractors, pool companies, restaurants, roofers, service businesses, local professionals, and other businesses that want more attention and better marketing.'
  },
  {
    q: 'What is D1 Community Advertising?',
    a: 'It is our local in-facility advertising program that gives businesses exposure to athletes, parents, families, and visitors through premium wall advertising and rotating digital TV placement.'
  },
  {
    q: 'Do you offer AI answering or lead follow-up?',
    a: 'Yes. We can help businesses set up AI-assisted call answering, text responses, lead qualification, appointment scheduling, and automated follow-up.'
  },
  {
    q: 'How much does a project cost?',
    a: 'Pricing depends on the project and the services you need. Tell us what you are trying to accomplish and we will recommend the simplest option that makes sense for your business.'
  },
  {
    q: 'How do I get started?',
    a: 'Choose the service you are interested in, send us a few details, and we will follow up to discuss the project and next steps.'
  }
];

export default function PurpleCowzConversionSections() {
  const [selected, setSelected] = useState([]);
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState('');

  const toggleService = (service) => {
    setSelected((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service]
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get('name'),
      business: formData.get('business'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      services: selected
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('Submission failed');
      setStep(3);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <>
      <section className="pc-trust-strip" aria-label="PurpleCowz benefits">
        <div className="pc-wrap pc-trust-grid">
          <div><strong>Built For Local Business</strong><span>Practical marketing that helps people notice you.</span></div>
          <div><strong>One Team. Multiple Services.</strong><span>Web, ads, branding, automation and exposure.</span></div>
          <div><strong>Designed To Convert</strong><span>Clear calls-to-action instead of pretty pages that do nothing.</span></div>
          <div><strong>Stand Out.</strong><span>That is the whole PurpleCowz idea.</span></div>
        </div>
      </section>

      <section className="pc-process-section">
        <div className="pc-wrap">
          <div className="pc-heading center">
            <span className="pc-eyebrow">HOW IT WORKS</span>
            <h2>From Idea To <em>Getting Noticed.</em></h2>
            <p>Simple process. No agency maze. Tell us what you need and we help turn it into something people remember.</p>
          </div>

          <div className="pc-process-grid">
            <article><span>01</span><h3>Tell Us What You Need</h3><p>Choose a service and give us the basic details about your business and goals.</p></article>
            <article><span>02</span><h3>We Build The Strategy</h3><p>We recommend the right combination of design, marketing and automation without loading you up with things you do not need.</p></article>
            <article><span>03</span><h3>Launch & Stand Out</h3><p>Your campaign, website or marketing piece goes live with a clear way for customers to take action.</p></article>
          </div>
        </div>
      </section>

      <section className="pc-contact-section" id="get-in-touch">
        <div className="pc-wrap pc-contact-grid">
          <div className="pc-contact-copy">
            <span className="pc-eyebrow">LET'S BUILD SOMETHING</span>
            <h2>Tell Us How We Can Help Your Business <em>Stand Out.</em></h2>
            <p>Pick what you are interested in and send us a few details. Just fill it out, hit send, and we&apos;ll follow up.</p>

            <div className="pc-contact-points">
              <div><b><CheckIcon /></b><span>Websites & landing pages</span></div>
              <div><b><CheckIcon /></b><span>Branding & advertising</span></div>
              <div><b><CheckIcon /></b><span>AI receptionist & automation</span></div>
              <div><b><CheckIcon /></b><span>D1 community advertising</span></div>
              <div><b><CheckIcon /></b><span>Real estate marketing systems</span></div>
            </div>
          </div>

          <div className="pc-form-card">
            <div className="pc-stepper">
              <div className={step >= 1 ? 'active' : ''}><span>1</span><small>Services</small></div>
              <i></i>
              <div className={step >= 2 ? 'active' : ''}><span>2</span><small>Your Info</small></div>
              <i></i>
              <div className={step >= 3 ? 'active' : ''}><span>3</span><small>Sent</small></div>
            </div>

            {step === 1 && (
              <div className="pc-step-panel">
                <h3>What Can We Help With?</h3>
                <p>Select one or more.</p>
                <div className="pc-service-select">
                  {services.map((service) => (
                    <button
                      type="button"
                      key={service}
                      className={selected.includes(service) ? 'selected' : ''}
                      onClick={() => toggleService(service)}
                    >
                      <span>{selected.includes(service) ? <CheckIcon /> : '+'}</span>{service}
                    </button>
                  ))}
                </div>
                <button className="pc-primary-btn" type="button" disabled={!selected.length} onClick={() => setStep(2)}>
                  Next Step →
                </button>
              </div>
            )}

            {step === 2 && (
              <form className="pc-step-panel" onSubmit={handleSubmit}>
                <button className="pc-back" type="button" onClick={() => setStep(1)}>← Back</button>
                <h3>Tell Us About You</h3>
                <div className="pc-fields">
                  <label>Full Name<input name="name" required placeholder="Your name" /></label>
                  <label>Business Name<input name="business" placeholder="Business name" /></label>
                  <label>Email<input name="email" type="email" required placeholder="you@business.com" /></label>
                  <label>Phone<input name="phone" type="tel" required placeholder="(954) 555-1234" /></label>
                  <label className="full">What are you looking to accomplish?<textarea name="message" rows="5" placeholder="Tell us a little about the project..." /></label>
                </div>
                <button className="pc-primary-btn" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send My Request →'}
                </button>
                {status === 'error' && <p className="pc-error">Something went wrong. Please try again.</p>}
              </form>
            )}

            {step === 3 && (
              <div className="pc-step-panel pc-success">
                <div className="pc-check"><CheckIcon size={32} /></div>
                <span className="pc-eyebrow">REQUEST RECEIVED</span>
                <h3>Now Let's Make You Stand Out.</h3>
                <p>Thanks for reaching out to PurpleCowz Media. We received your request and will follow up using the contact information you provided.</p>
                <button className="pc-secondary-btn" type="button" onClick={() => { setSelected([]); setStep(1); setStatus(''); }}>
                  Send Another Request
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="pc-faq-section" id="faq">
        <div className="pc-wrap pc-faq-grid">
          <div className="pc-heading">
            <span className="pc-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            <h2>Questions? <em>We Got You.</em></h2>
            <p>Quick answers about what PurpleCowz does and how to get started.</p>
            <a href="#get-in-touch" className="pc-secondary-btn">Ask Us Something →</a>
          </div>

          <div className="pc-faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.q} open={index === 0}>
                <summary>{faq.q}<span>+</span></summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pc-final-cta">
        <div className="pc-wrap pc-final-inner">
          <div>
            <span className="pc-eyebrow">YOUR BUSINESS SHOULD NOT BLEND IN</span>
            <h2>Be The <em>Purple Cow.</em></h2>
            <p>Let's build marketing people actually notice.</p>
          </div>
          <a href="#get-in-touch" className="pc-light-btn">Get A Free Consultation →</a>
        </div>
      </section>

      <style jsx>{`
        :global(html) { scroll-behavior: smooth; }
        .pc-wrap { width: min(1180px, calc(100% - 40px)); margin: 0 auto; }
        .pc-eyebrow { display: inline-block; color: #a75cff; font-size: 12px; font-weight: 800; letter-spacing: .18em; margin-bottom: 14px; }
        h2 { margin: 0; color: #fff; font-size: clamp(36px, 5vw, 64px); line-height: .98; letter-spacing: -.045em; }
        h2 em { color: #a75cff; font-style: normal; }
        p { color: #aaa8b3; line-height: 1.7; }

        .pc-trust-strip { background: #0a0a0d; border-top: 1px solid #232329; border-bottom: 1px solid #232329; }
        .pc-trust-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .pc-trust-grid > div { padding: 28px 25px; border-right: 1px solid #232329; }
        .pc-trust-grid > div:last-child { border-right: 0; }
        .pc-trust-grid strong { display: block; color: #fff; margin-bottom: 7px; font-size: 15px; }
        .pc-trust-grid span { color: #777680; font-size: 13px; line-height: 1.5; }

        .pc-process-section, .pc-faq-section { background: #101014; padding: 100px 0; }
        .pc-heading.center { max-width: 760px; text-align: center; margin: 0 auto 48px; }
        .pc-heading.center p { max-width: 650px; margin: 18px auto 0; }
        .pc-process-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .pc-process-grid article { position: relative; padding: 36px; min-height: 245px; border: 1px solid #2d2635; border-radius: 24px; background: linear-gradient(145deg, #17141d 0%, #0e0e12 100%); overflow: hidden; }
        .pc-process-grid article::after { content: ''; position: absolute; width: 150px; height: 150px; right: -45px; top: -45px; border-radius: 50%; background: rgba(151, 65, 255, .12); filter: blur(6px); }
        .pc-process-grid article > span { color: #a75cff; font-size: 13px; font-weight: 900; letter-spacing: .18em; }
        .pc-process-grid h3 { color: #fff; font-size: 23px; margin: 55px 0 10px; }
        .pc-process-grid p { margin: 0; font-size: 14px; }

        .pc-contact-section { padding: 110px 0; background: radial-gradient(circle at 12% 20%, rgba(125, 36, 210, .24), transparent 35%), #08080a; }
        .pc-contact-grid { display: grid; grid-template-columns: .85fr 1.15fr; gap: 72px; align-items: center; }
        .pc-contact-copy > p { max-width: 520px; margin: 24px 0; }
        .pc-contact-points { display: grid; gap: 12px; margin-top: 30px; }
        .pc-contact-points div { display: flex; align-items: center; gap: 12px; color: #d9d8df; }
        .pc-contact-points b { width: 25px; height: 25px; display: grid; place-items: center; border-radius: 50%; background: rgba(157, 75, 255, .15); color: #b978ff; }

        .pc-form-card { border: 1px solid #34283f; border-radius: 28px; background: rgba(20, 18, 25, .94); box-shadow: 0 30px 90px rgba(0,0,0,.38); overflow: hidden; }
        .pc-stepper { display: grid; grid-template-columns: auto 1fr auto 1fr auto; align-items: center; padding: 26px 30px; background: #0d0c10; border-bottom: 1px solid #252129; }
        .pc-stepper > div { display: flex; flex-direction: column; align-items: center; gap: 6px; color: #64616a; }
        .pc-stepper > div span { width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; border: 1px solid #37343b; font-weight: 800; }
        .pc-stepper > div small { font-size: 10px; text-transform: uppercase; letter-spacing: .08em; }
        .pc-stepper > div.active { color: #c78dff; }
        .pc-stepper > div.active span { background: #8f36e8; color: #fff; border-color: #8f36e8; }
        .pc-stepper i { height: 1px; background: #2b2830; margin: 0 12px 20px; }
        .pc-step-panel { padding: 36px; }
        .pc-step-panel h3 { color: #fff; font-size: 28px; margin: 0 0 4px; }
        .pc-step-panel > p { margin-top: 7px; }
        .pc-service-select { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 24px 0 28px; }
        .pc-service-select button { display: flex; gap: 10px; align-items: center; min-height: 54px; padding: 12px 15px; color: #d8d7dd; background: #121116; border: 1px solid #312d36; border-radius: 12px; text-align: left; cursor: pointer; }
        .pc-service-select button span { color: #ad6bff; font-weight: 900; }
        .pc-service-select button.selected { background: rgba(143, 54, 232, .16); border-color: #9341e9; color: #fff; }
        .pc-primary-btn, .pc-secondary-btn, .pc-light-btn { display: inline-flex; justify-content: center; align-items: center; min-height: 50px; padding: 0 22px; border-radius: 999px; font-weight: 800; text-decoration: none; cursor: pointer; }
        .pc-primary-btn { width: 100%; border: 0; color: #fff; background: linear-gradient(90deg, #7f28d9, #b35eff); }
        .pc-primary-btn:disabled { opacity: .4; cursor: not-allowed; }
        .pc-secondary-btn { border: 1px solid #4b4058; color: #fff; background: transparent; }
        .pc-fields { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 24px 0; }
        .pc-fields label { display: grid; gap: 7px; color: #bbb8c2; font-size: 12px; font-weight: 700; }
        .pc-fields .full { grid-column: 1 / -1; }
        .pc-fields input, .pc-fields textarea { width: 100%; box-sizing: border-box; padding: 14px 15px; color: #fff; background: #0d0c10; border: 1px solid #302c35; border-radius: 11px; outline: none; }
        .pc-fields input:focus, .pc-fields textarea:focus { border-color: #9341e9; box-shadow: 0 0 0 3px rgba(147,65,233,.12); }
        .pc-back { padding: 0; margin-bottom: 18px; border: 0; background: transparent; color: #9f6ed5; cursor: pointer; }
        .pc-error { color: #ff8f9b; text-align: center; font-size: 13px; }
        .pc-success { text-align: center; padding-top: 55px; padding-bottom: 55px; }
        .pc-check { width: 70px; height: 70px; margin: 0 auto 22px; border-radius: 50%; display: grid; place-items: center; background: #8e38e2; color: #fff; font-size: 34px; font-weight: 900; }
        .pc-success p { max-width: 500px; margin: 18px auto 25px; }

        .pc-faq-grid { display: grid; grid-template-columns: .7fr 1.3fr; gap: 70px; align-items: start; }
        .pc-faq-grid .pc-heading { position: sticky; top: 100px; }
        .pc-faq-grid .pc-heading p { margin: 18px 0 28px; }
        .pc-faq-list { display: grid; gap: 10px; }
        .pc-faq-list details { border: 1px solid #2c2930; border-radius: 15px; background: #0c0c0f; overflow: hidden; }
        .pc-faq-list summary { list-style: none; display: flex; justify-content: space-between; gap: 20px; padding: 21px 22px; color: #f4f2f7; font-weight: 800; cursor: pointer; }
        .pc-faq-list summary::-webkit-details-marker { display: none; }
        .pc-faq-list summary span { color: #a75cff; font-size: 22px; transition: transform .2s; }
        .pc-faq-list details[open] summary span { transform: rotate(45deg); }
        .pc-faq-list details p { margin: 0; padding: 0 22px 22px; }

        .pc-final-cta { padding: 65px 0; background: linear-gradient(110deg, #6d1fc1, #9c46e9 55%, #53208a); }
        .pc-final-inner { display: flex; justify-content: space-between; align-items: center; gap: 30px; }
        .pc-final-cta .pc-eyebrow { color: #e9d1ff; }
        .pc-final-cta h2 { font-size: clamp(38px, 4vw, 60px); }
        .pc-final-cta h2 em { color: #fff; }
        .pc-final-cta p { color: rgba(255,255,255,.82); margin-bottom: 0; }
        .pc-light-btn { flex: 0 0 auto; background: #fff; color: #4e147d; border: 0; }

        @media (max-width: 900px) {
          .pc-trust-grid { grid-template-columns: 1fr 1fr; }
          .pc-trust-grid > div:nth-child(2) { border-right: 0; }
          .pc-trust-grid > div:nth-child(-n+2) { border-bottom: 1px solid #232329; }
          .pc-process-grid, .pc-contact-grid, .pc-faq-grid { grid-template-columns: 1fr; }
          .pc-contact-grid, .pc-faq-grid { gap: 45px; }
          .pc-faq-grid .pc-heading { position: static; }
        }

        @media (max-width: 620px) {
          .pc-wrap { width: min(100% - 28px, 1180px); }
          .pc-process-section, .pc-faq-section, .pc-contact-section { padding: 75px 0; }
          .pc-trust-grid { grid-template-columns: 1fr; }
          .pc-trust-grid > div { border-right: 0; border-bottom: 1px solid #232329; }
          .pc-process-grid { grid-template-columns: 1fr; }
          .pc-service-select, .pc-fields { grid-template-columns: 1fr; }
          .pc-fields .full { grid-column: auto; }
          .pc-step-panel { padding: 26px 20px; }
          .pc-stepper { padding: 20px 16px; }
          .pc-final-inner { flex-direction: column; align-items: flex-start; }
          .pc-light-btn { width: 100%; }
        }
      `}</style>
    </>
  );
}
