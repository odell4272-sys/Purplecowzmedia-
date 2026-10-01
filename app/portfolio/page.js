import Link from 'next/link';
import PageHero from '../../components/PageHero';
import CTA from '../../components/CTA';

const featuredProjects = [
  {
    title: 'D1 Community Advertising',
    category: 'Community Advertising',
    image: '/d1-community-wall-real.jpg',
    imageClass: 'cover',
    text: 'A real-world advertising program combining premium wall placement, rotating TV exposure and local community visibility inside D1 Training.',
    tags: ['Wall Display', 'TV Rotation', 'Local Visibility'],
    href: '/d1-community-partners'
  },
  {
    title: 'K&R Pool Repair Website',
    category: 'Website Design',
    image: '/kr-pool-homepage-real.png',
    imageClass: 'contain dark',
    text: 'A bold, conversion-focused website built to make a local service business look established, professional and easy to contact.',
    tags: ['Website', 'Landing Page', 'Lead Generation'],
    href: '/services'
  }
];

const projects = [
  {
    title: 'Fidelity Investment Campaign',
    category: 'Brand & Ad Design',
    image: '/fidelity-investment-ad.png',
    imageClass: 'contain navy',
    text: 'Investment-focused creative that brings the Fidelity brand, services and positioning together in one polished visual.'
  },
  {
    title: 'K&R Pool Repair Campaign',
    category: 'Digital & TV Creative',
  image: '/kr-pool-ad.png',
  imageClass: 'contain navy',
    text: 'High-impact campaign creative designed for digital display, TV screens and local advertising.'
  },
  {
    title: 'PurpleCowz Brand Identity',
    category: 'Logo & Branding',
    image: '/purplecowz-shield.png',
    imageClass: 'contain charcoal',
    text: 'A recognizable brand system built around the purple cow idea: be different, be memorable and stand out.'
  },
  {
    title: 'Real Estate Marketing',
    category: 'Property Marketing',
    text: 'Property-focused marketing and information pieces that organize the details and help present a real estate opportunity clearly.'
  }
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Work That Earns Attention."
        text="A mix of websites, branding, community advertising and campaign creative built for real businesses that want to look different and get noticed."
      />

      <section className="section portfolio-showcase cow-zone purple-wash-soft">
        <div className="cow-fade cow-fade-page-right" />
        <div className="container">
          <div className="portfolio-section-heading">
            <div>
              <span className="eyebrow">Featured Work</span>
              <h2>Real Projects. Real Businesses.</h2>
            </div>
            <p>
              PurpleCowz Media combines strong visuals with practical marketing — from the screen in someone&apos;s hand to the wall they walk past every week.
            </p>
          </div>

          <div className="portfolio-featured-grid">
            {featuredProjects.map((project) => (
              <article className="portfolio-featured-card" key={project.title}>
                <div className={`portfolio-featured-image ${project.imageClass}`}>
                  <img src={project.image} alt={project.title} />
                  <span className="portfolio-category">{project.category}</span>
                </div>
                <div className="portfolio-featured-body">
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <div className="portfolio-tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <Link className="portfolio-project-link" href={project.href}>Explore This Service →</Link>
                </div>
              </article>
            ))}
          </div>

          <div className="portfolio-more-heading">
            <span className="eyebrow">More Creative Work</span>
            <h2>Different Formats. One Goal: Stand Out.</h2>
          </div>

          <div className="portfolio-project-grid">
            {projects.map((project) => (
              <article className="portfolio-project-card" key={project.title}>
                {project.image && (
                  <div className={`portfolio-project-image ${project.imageClass}`}>
                    <img src={project.image} alt={project.title} />
                    <span className="portfolio-category">{project.category}</span>
                  </div>
                )}
                <div className="portfolio-project-body">
                  {!project.image && <span className="eyebrow">{project.category}</span>}
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="portfolio-bottom-cta">
            <div>
              <span className="eyebrow">Your Business Could Be Next</span>
              <h2>Need Something People Will Remember?</h2>
            </div>
            <Link className="btn" href="/contact">Start A Project</Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
