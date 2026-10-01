import PageHero from '../../components/PageHero';
import CTA from '../../components/CTA';

const items = [
  ['Branding & Creative', 'Logos, campaign concepts, ad layouts, branded graphics and visual systems that give your business a recognizable look.'],
  ['TV & Digital Display Advertising', 'Motion-ready and static creative built for large-screen displays, digital signage and high-visibility placements.'],
  ['Print Marketing', 'Plaques, posters, brochures, flyers, inserts and promotional materials prepared for professional printing.'],
  ['Website Design', 'Modern websites and landing pages designed to look premium, load quickly and make it easy for prospects to take the next step.'],
  ['Social Media Creative', 'Platform-ready content for Facebook, Instagram, TikTok, YouTube and other channels.'],
  ['Local Advertising Campaigns', 'Campaign packages that combine physical and digital exposure for businesses trying to dominate a local market.']
];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our Services" title="Big Visibility. Sharp Creative. No Beige Marketing." text="From the wall to the screen to the phone in your customer’s hand, PurpleCowz Media creates advertising designed to get noticed." />
      <section className="section">
        <div className="container card-grid two-col">
          {items.map(([title, text], i) => (
            <article className="service-card large" key={title}>
              <span className="card-number">0{i + 1}</span>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
