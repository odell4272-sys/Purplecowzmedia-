export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero cow-zone">
      <div className="cow-fade cow-fade-page-left" aria-hidden="true" />
      <div className="cow-fade cow-fade-page-right" aria-hidden="true" />
      <div className="container narrow">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
