export default function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}) {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 8%",
        background:
          "linear-gradient(135deg, #0f0f0f 0%, #1c1c1c 40%, #0f0f0f 100%)",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: "720px" }}>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            lineHeight: "1.05",
            fontWeight: "700",
            marginBottom: "24px",
            letterSpacing: "-0.03em",
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.6",
            color: "#d1d1d1",
            marginBottom: "48px",
          }}
        >
          {subtitle}
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a
            href={primaryCta.link}
            style={{
              padding: "16px 32px",
              backgroundColor: "#f5c451",
              color: "#000",
              fontSize: "1rem",
              fontWeight: "600",
              borderRadius: "10px",
              textDecoration: "none",
            }}
          >
            {primaryCta.text}
          </a>

          <a
            href={secondaryCta.link}
            style={{
              padding: "16px 32px",
              border: "1px solid #f5c451",
              color: "#f5c451",
              fontSize: "1rem",
              fontWeight: "600",
              borderRadius: "10px",
              textDecoration: "none",
            }}
          >
            {secondaryCta.text}
          </a>
        </div>
      </div>
    </section>
  );
}
