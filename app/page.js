import Link from 'next/link';
import CTA from '../components/CTA';

const services = [
  ['Brand & Ad Design', 'Attention-grabbing creative built for signs, screens, social media, print and digital campaigns.'],
  ['D1 Community Advertising', 'Premium local exposure through wall plaques, rotating TV advertising and printed promotional materials.'],
  ['Websites & Landing Pages', 'Clean, conversion-focused websites that make your business look established and easy to contact.'],
  ['Social & Digital Media', 'Campaign creative sized and adapted for Instagram, Facebook, TikTok, YouTube and more.'],
  ['Print & Display Advertising', 'Posters, plaques, flyers, brochures and physical marketing pieces designed to look polished in the real world.'],
  ['Local Business Marketing', 'Practical campaigns focused on visibility, leads and staying top-of-mind in your community.']
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Creative Marketing For Businesses That Refuse To Blend In</span>
            <h1>STOP BLENDING IN.<br /><span>START STANDING OUT.</span></h1>
            <p>PurpleCowz Media helps local businesses get noticed through creative advertising, digital media, community partnerships, print, TV, websites and unforgettable marketing.</p>
            <div className="hero-actions">
              <Link className="btn" href="/contact">Make My Business Stand Out</Link>
              <Link className="btn btn-ghost" href="/services">See What We Do</Link>
            </div>
            <div className="proof-row">
              <div><strong>Bold</strong><span>Creative</span></div>
              <div><strong>Local</strong><span>Visibility</span></div>
              <div><strong>Multi-Channel</strong><span>Exposure</span></div>
            </div>
          </div>
          <div className="hero-logo-wrap">
            <div className="logo-halo" />
            <img className="hero-logo" src="/purplecowz-shield.png" alt="PurpleCowz Media logo" />
          </div>
        </div>
      </section>

      <section className="marquee-strip" aria-label="PurpleCowz capabilities">
        <div>BRANDING • DIGITAL • TV • PRINT • WEB • COMMUNITY PARTNERSHIPS • SOCIAL MEDIA • CREATIVE •</div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head split-head">
            <div>
              <span className="eyebrow">What We Do</span>
              <h2>Marketing People Actually Notice.</h2>
            </div>
            <p>We combine strong design with real-world placement so your message does more than look good — it gets seen.</p>
          </div>
          <div className="card-grid three-col">
            {services.map(([title, text], i) => (
              <article className="service-card" key={title}>
                <span className="card-number">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container feature-grid">
          <div className="feature-art">
            <img src="/purplecowz-shield.png" alt="PurpleCowz Media" />
          </div>
          <div>
            <span className="eyebrow">D1 Community Partners</span>
            <h2>Put Your Business In Front Of Local Families.</h2>
            <p>Our D1 Community Partner program gives businesses an opportunity to be seen inside an active athletic facility by athletes, parents, families and visitors.</p>
            <ul className="check-list">
              <li>Custom advertisement design and layout</li>
              <li>Professionally printed wall plaque</li>
              <li>Premium placement on the Community Partners wall</li>
              <li>Rotating TV advertising inside the facility</li>
              <li>Inclusion in printed promotional materials</li>
            </ul>
            <Link className="text-link" href="/d1-community-partners">Explore The D1 Program →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head centered">
            <span className="eyebrow">The PurpleCowz Difference</span>
            <h2>Normal Marketing Is Easy To Ignore.</h2>
            <p>We are here for the businesses that want more personality, better presentation and stronger visibility.</p>
          </div>
          <div className="stats-grid">
            <div><strong>01</strong><h3>Stand Out</h3><p>Creative designed to break the pattern and earn attention.</p></div>
            <div><strong>02</strong><h3>Stay Visible</h3><p>Multiple touchpoints help your business remain top-of-mind.</p></div>
            <div><strong>03</strong><h3>Look Professional</h3><p>Consistent visual presentation builds credibility before the first call.</p></div>
            <div><strong>04</strong><h3>Keep It Local</h3><p>Reach customers in the communities where you actually do business.</p></div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
