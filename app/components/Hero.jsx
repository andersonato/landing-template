export default function Hero({ headline, subheadline, ctaText, contactEmail }) {
  return (
    <section className="hero">
      <div className="hero-bg" />

      <div className="container hero-content">
        <h1>{headline}</h1>
        <p>{subheadline}</p>

        <a href={`mailto:${contactEmail}`} className="button hero-cta">
          {ctaText}
        </a>
      </div>
    </section>
  );
}
