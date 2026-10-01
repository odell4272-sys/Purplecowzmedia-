import PageHero from '../../components/PageHero';
import CTA from '../../components/CTA';

const projects = [
  {
    title: 'PurpleCowz Branded Invoice',
    text: 'Custom branded invoice design created to keep the PurpleCowz identity consistent across client-facing materials.',
    image: '/PCz1.png',
    label: 'PCZ / 01'
  },
  {
    title: 'PurpleCowz Corporate Invoice',
    text: 'A polished invoice layout using PurpleCowz colors, typography and visual branding.',
    image: '/PCz2.png',
    label: 'PCZ / 02'
  },
  {
    title: 'Real Estate Marketing Material',
    text: 'Property information and marketing material prepared for real estate and investment-property campaigns.',
    image: '/PCz3.png',
    label: 'PCZ / 03'
  }
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        title="Made To Be Seen."
        text="A growing mix of digital, print, display and community advertising created for businesses that want more than generic marketing."
      />

      <section className="section">
        <div className="container portfolio-grid">
          {projects.map((project) => (
            <article className="portfolio-card" key={project.label}>
              <div className="portfolio-image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-image"
                />
                <span className="portfolio-label">{project.label}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
