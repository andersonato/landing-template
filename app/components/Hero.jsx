export default function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}) {
  if (!title) return null;

  return (
    <section
      style={{
        padding: "140px 8% 120px",
        background:
          "linear-gradient(135deg, #0f0f0f 0%, #1c1c1c 40%, #0f0f0f 100%)",
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
            lineHeight: "1.05",
            fontWeight: "700",
            marginBottom: "24px",
            letterSpacing: "-0.03em",
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            style={{
              fontSize: "1.3rem",
              lineHeight: "1.6",
              color: "#d1d1d1",
              marginBottom: "48px",
              maxWidth: "720px",
            }}
          >
            {subtitle}
          </p>
        )}

        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          {primaryCta?.text && primaryCta?.link && (
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
          )}

          {secondaryCta?.text && secondaryCta?.link && (
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
          )}
        </div>
      </div>
    </section>
  );
}
