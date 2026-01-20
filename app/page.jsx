import { siteConfig } from "../config";

export default function Home() {
  return (
    <main style={{ padding: "64px", fontFamily: "Arial, sans-serif" }}>
      <section style={{ maxWidth: 720 }}>
        <h1 style={{ fontSize: 42, marginBottom: 16 }}>
          {siteConfig.headline}
        </h1>

        <p style={{ fontSize: 18, marginBottom: 32 }}>
          {siteConfig.description}
        </p>

        <a
          href={`mailto:${siteConfig.contactEmail}`}
          style={{
            display: "inline-block",
            padding: "14px 28px",
            background: "#000",
            color: "#fff",
            textDecoration: "none",
            borderRadius: 6,
            fontWeight: "bold",
          }}
        >
          {siteConfig.ctaLabel}
        </a>
      </section>
    </main>
  );
}
