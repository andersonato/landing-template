import { landingData } from "./data/landing";

export default function Home() {
  return (
    <main style={{ padding: 80, maxWidth: 900 }}>
      <h1>{landingData.headline}</h1>
      <p style={{ fontSize: 18 }}>{landingData.subheadline}</p>

      <button style={{ marginTop: 24, padding: "12px 24px" }}>
        {landingData.ctaText}
      </button>

      <section style={{ marginTop: 60 }}>
        <h2>Por que escolher?</h2>
        <ul>
          {landingData.benefits.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: 60 }}>
        <h2>{landingData.proof.title}</h2>
        <p>{landingData.proof.description}</p>
      </section>
    </main>
  );
}
