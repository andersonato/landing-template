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
            color: "#fff",
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
