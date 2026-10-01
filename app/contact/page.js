import PageHero from '../../components/PageHero';
import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Start A Project" title="Give Us Something To Make Impossible To Ignore." text="Tell us about your business, what you are promoting and where you want to be seen." />
      <section className="section">
        <div className="container contact-layout">
          <div>
            <span className="eyebrow">PurpleCowz Media</span>
            <h2>Let’s Make Some Noise.</h2>
            <p>Whether you need one standout ad or a complete local advertising package, start with the goal. We can work backward from there.</p>
            <div className="contact-notes">
              <div><strong>Great For</strong><span>Local businesses, service companies, real estate, healthcare, restaurants, home services and professional brands.</span></div>
              <div><strong>Popular Projects</strong><span>D1 wall advertising, TV ads, print creative, websites, digital campaigns and complete marketing packages.</span></div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
