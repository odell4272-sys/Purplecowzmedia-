import Link from 'next/link';
import PurpleCowzConversionSections from '../components/PurpleCowzConversionSections';

const services = [
  {
    title: 'Brand & Ad Design',
    text: 'Attention-grabbing creative built for signs, screens, social media, print and digital campaigns.',
    image: '/fidelity-brand-logo.png',
    imageAlt: 'Fidelity Real Estate Group branding and advertising design created for a real-world display wall',
    imageLabel: 'Fidelity Brand Design',
    imageClass: 'service-card-image service-card-image-brand',
    imageWrapClass: 'service-card-image-wrap service-card-image-wrap-brand',
    href: '/portfolio',
    linkText: 'See Our Brand Work'
  },
  {
    title: 'D1 Community Advertising',
    text: 'Premium local exposure through wall plaques, rotating TV advertising and printed promotional materials.',
    image: '/d1-community-wall-real.jpg',
    imageAlt: 'D1 Community Partners advertising wall with printed business displays and rotating TV advertising',
    imageLabel: 'Real D1 Wall Display',
    imageClass: 'service-card-image service-card-image-d1',
    href: '/d1-community-partners',
    linkText: 'See The D1 Program'
  },
  {
    title: 'Websites & Landing Pages',
    text: 'Clean, conversion-focused websites that make your business look established, professional and easy to contact.',
    image: '/kr-pool-homepage-real.png',
    imageAlt: 'K&R Pool Repair website homepage designed by PurpleCowz Media',
    imageLabel: 'K&R Pool Repair Website',
    imageClass: 'service-card-image service-card-image-website',
    href: '/contact',
    linkText: 'Build My Website'
  },
  {
    title: 'Social & Digital Media',
    text: 'Campaign creative sized and adapted for Instagram, Facebook, TikTok, YouTube and more.'
  },
  {
    title: 'Print & Display Advertising',
    text: 'Posters, plaques, flyers, brochures and physical marketing pieces designed to look polished in the real world.'
  },
  {
    title: 'Local Business Marketing',
    text: 'Practical campaigns focused on visibility, leads and staying top-of-mind in your community.'
  }
];

export default function Home() {
  return (
    <>
      <section className="hero cow-zone hero-purple">
        <div className="cow-fade cow-fade-hero" aria-hidden="true" />
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

      <section className="section purple-wash cow-zone">
        <div className="cow-fade cow-fade-what-one" aria-hidden="true" />
        <div className="cow-fade cow-fade-what-two" aria-hidden="true" />
        <div className="container">
          <div className="section-head split-head">
            <div>
              <span className="eyebrow">What We Do</span>
              <h2>Marketing People Actually Notice.</h2>
            </div>
            <p>We combine strong design with real-world placement so your message does more than look good — it gets seen.</p>
          </div>

          <div className="card-grid three-col">
            {services.map((service, i) => (
              <article
                className={`service-card ${service.image ? 'has-image' : ''}`}
                key={service.title}
              >
                {service.image ? (
                  <>
                    <div className={service.imageWrapClass || 'service-card-image-wrap'}>
                      <img
                        className={service.imageClass || 'service-card-image'}
                        src={service.image}
                        alt={service.imageAlt}
                      />
                      <span className="service-image-label">{service.imageLabel}</span>
                      <span className="card-number card-number-on-image">0{i + 1}</span>
                    </div>
                    <div className="service-card-body">
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                      {service.href && (
                        <Link className="service-card-link" href={service.href}>
                          {service.linkText} →
                        </Link>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <span className="card-number">0{i + 1}</span>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark cow-zone">
        <div className="cow-fade cow-fade-d1" aria-hidden="true" />
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

      <section className="section purple-wash-soft cow-zone">
        <div className="cow-fade cow-fade-difference" aria-hidden="true" />
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

      <PurpleCowzConversionSections />
    </>
  );
}
