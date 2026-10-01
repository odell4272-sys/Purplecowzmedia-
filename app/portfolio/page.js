import PageHero from '../../components/PageHero';
import CTA from '../../components/CTA';

const projects = [
  ['Community Partner Wall Advertising', 'Large-format plaque designs built to command attention in a busy athletic environment.'],
  ['65-Inch TV Advertising', 'High-impact screen creative formatted for in-facility display and repeated brand exposure.'],
  ['Local Service Business Campaigns', 'Clear offers, bold headlines and practical calls-to-action for local companies.'],
  ['Real Estate & Investment Marketing', 'Property advertising, digital creative and display materials designed to move fast and look professional.'],
  ['Print Promotion', 'Brochure, flyer and handout concepts that extend campaigns beyond the screen.'],
  ['Web & Landing Pages', 'Modern digital destinations that turn attention into inquiries.']
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero eyebrow="Selected Work" title="Made To Be Seen." text="A growing mix of digital, print, display and community advertising created for businesses that want more than generic marketing." />
      <section className="section">
        <div className="container portfolio-grid">
          {projects.map(([title, text], i) => (
            <article className="portfolio-card" key={title}>
              <div className="portfolio-visual"><span>PCZ / 0{i + 1}</span></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
