export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
}) {
  return (
    <section
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        padding: "0 8%",
        background: "linear-gradient(180deg, #ffffff 0%, #f7f7f7 100%)",
      }}
    >
      <div style={{ maxWidth: "720px" }}>
        <h1
          style={{
            fontSize: "3.5rem",
            lineHeight: "1.1",
            fontWeight: "700",
            marginBottom: "24px",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.6",
            color: "#444",
            marginBottom: "40px",
          }}
        >
          {subtitle}
        </p>

        <a
          href={ctaLink}
          style={{
            display: "inline-block",
            padding: "16px 32px",
            backgroundColor: "#000",
            color: "#fff",export default function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundImage,
}) {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 8%",
        color: "#fff",
        background: backgroundImage
          ? `linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.65)), url(${backgroundImage}) center/cover`
          : "linear-gradient(135deg, #0f0f0f, #1a1a1a)",
      }}
    >
      <div style={{ maxWidth: "820px" }}>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: "24px",
            letterSpacing: "-0.03em",
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            opacity: 0.9,
            maxWidth: "620px",
            marginBottom: "48px",
          }}
        >
          {subtitle}
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a
            href={primaryCta.link}
            style={{
              padding: "16px 36px",
              background: "#facc15",
              color: "#000",
              fontWeight: 700,
              borderRadius: "10px",
              textDecoration: "none",
            }}
          >
            {primaryCta.label}
          </a>

          {secondaryCta && (
            <a
              href={secondaryCta.link}
              style={{
                padding: "16px 36px",
                border: "2px solid #facc15",
                color: "#facc15",
                fontWeight: 600,
                borderRadius: "10px",
                textDecoration: "none",
              }}
            >
              {secondaryCta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

            fontSize: "1rem",
            fontWeight: "600",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
}
