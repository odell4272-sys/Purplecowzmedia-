import PageHero from '../../components/PageHero';
import CTA from '../../components/CTA';

export default function D1Page() {
  return (
    <>
      <PageHero eyebrow="D1 Community Partners" title="Local Advertising That Lives Where Your Customers Already Are." text="A premium in-facility advertising program created to connect local businesses with D1 athletes, parents, families and visitors." />

      <section className="section d1-wall-showcase">
        <div className="d1-wall-overlay" aria-hidden="true" />
        <div className="container feature-grid d1-wall-content">
          <div>
            <span className="eyebrow">Complete Local Advertising Package</span>
            <h2>One Package. Multiple Ways To Be Seen.</h2>
            <p>Your business is not limited to a single sign. The program combines permanent-style visual exposure with rotating digital visibility and printed promotion.</p>
            <ul className="check-list">
              <li>Custom advertisement design and layout</li>
              <li>Professionally printed wall plaque</li>
              <li>Premium placement on the D1 Community Partners wall</li>
              <li>Rotating TV advertising inside the facility</li>
              <li>Inclusion in printed promotional materials</li>
              <li>Ongoing exposure to D1 athletes, parents, families and visitors</li>
            </ul>
          </div>
          <div className="package-card d1-glass-card">
            <span className="eyebrow">Community Partner</span>
            <h3>Build Recognition Where Relationships Happen.</h3>
            <p>Designed for local service businesses that want to stay visible to active families in the community.</p>
            <div className="tag-list">
              <span>Home Services</span><span>Healthcare</span><span>Restaurants</span><span>Real Estate</span><span>Fitness</span><span>Professional Services</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container section-head centered">
          <span className="eyebrow">Why It Works</span>
          <h2>Repeated Exposure Builds Familiarity.</h2>
          <p>The goal is simple: keep your business visible in an environment where local families spend real time, week after week.</p>
        </div>
      </section>
      <CTA />
    </>
  );
}
