export default function Cta({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}) {
  if (!title) return null;

  return (
    <section
      style={{
        padding: "120px 8%",
        background:
          "linear-gradient(135deg, #f5c451 0%, #e0b43f 100%)",
        color: "#000",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "2.6rem",
            fontWeight: "700",
            marginBottom: "16px",
          }}
        >
          {title}
        </h2>

        {subtitle && (
          <p
            style={{
              fontSize: "1.2rem",
              marginBottom: "40px",
              opacity: 0.85,
            }}
          >
            {subtitle}
          </p>
        )}

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {primaryCta?.text && primaryCta?.link && (
            <a
              href={primaryCta.link}
              style={{
                padding: "16px 32px",
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "10px",
                fontWeight: "600",
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
                border: "2px solid #000",
                color: "#000",
                borderRadius: "10px",
                fontWeight: "600",
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
