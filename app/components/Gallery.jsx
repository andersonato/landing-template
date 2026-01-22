export default function Gallery({ title, subtitle, images = [] }) {
  if (!images.length) return null;

  return (
    <section
      style={{
        padding: "160px 6%",
        background: `
          radial-gradient(
            circle at top,
            rgba(255, 255, 255, 0.05),
            transparent 45%
          ),
          radial-gradient(
            circle at bottom,
            rgba(0, 0, 0, 0.85),
            transparent 55%
          ),
          linear-gradient(
            180deg,
            #0b0b0b 0%,
            #0f0f0f 50%,
            #0b0b0b 100%
          )
        `,
        color: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {title && (
          <h2
            style={{
              fontSize: "2.6rem",
              fontWeight: "700",
              marginBottom: "16px",
              textAlign: "center",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h2>
        )}

        {subtitle && (
          <p
            style={{
              fontSize: "1.15rem",
              color: "#cfcfcf",
              marginBottom: "72px",
              textAlign: "center",
              maxWidth: "760px",
              marginInline: "auto",
              lineHeight: "1.6",
            }}
          >
            {subtitle}
          </p>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "28px",
          }}
        >
          {images.map((src, index) => {
            const isHero = index === 0;

            return (
              <div
                key={index}
                style={{
                  gridColumn: isHero ? "span 6" : "span 3",
                  height: isHero ? "440px" : "280px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  backgroundColor: "#1a1a1a",
                  boxShadow:
                    "0 40px 80px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.04)",
                }}
              >
                <img
                  src={src}
                  alt={`Galeria ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "contrast(1.05) saturate(1.05)",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
