import { landingData } from "./data/landing";

export default function Home() {
  return (
    <main>
      <section className="container">
        <h1>{landingData.headline}</h1>
        <p>{landingData.subheadline}</p>

        <a
          href={`mailto:${landingData.contactEmail}`}
          className="button"
        >
          {landingData.ctaText}
        </a>
      </section>

      <section className="container section">
        <h2>Por que escolher</h2>
        <ul>
          {landingData.benefits.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="container section">
        <h2>{landingData.proof.title}</h2>
        <p>{landingData.proof.description}</p>
      </section>
    </main>
  );
}
