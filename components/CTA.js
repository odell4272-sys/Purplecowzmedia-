import Link from 'next/link';

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-card">
        <div>
          <span className="eyebrow">Ready To Get Noticed?</span>
          <h2>Stop Blending In.</h2>
          <p>Tell us what you are promoting and we will help you turn it into something people remember.</p>
        </div>
        <Link className="btn" href="/contact">Start A Project</Link>
      </div>
    </section>
  );
}
