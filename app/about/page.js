import PageHero from '../../components/PageHero';
import CTA from '../../components/CTA';

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About PurpleCowz" title="Because Nobody Remembers The Cow That Looked Like Every Other Cow." text="PurpleCowz Media was built around a simple idea: attention matters. If your business looks exactly like everyone else, customers have no reason to remember it." />
      <section className="section">
        <div className="container feature-grid">
          <div className="feature-art logo-panel"><img src="/purplecowz-logo.png" alt="PurpleCowz Media" /></div>
          <div>
            <span className="eyebrow">Our Point Of View</span>
            <h2>Different Gets Remembered.</h2>
            <p>We create marketing that is bold without becoming noisy, polished without feeling corporate, and practical enough to work in the real world.</p>
            <p>Our focus is especially strong on local businesses — the companies that need to be recognized in their own communities, not just collect random impressions online.</p>
            <p>That means designing the ad, thinking about where it will be seen, adapting it for multiple formats and keeping the message clear enough that people know what to do next.</p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
