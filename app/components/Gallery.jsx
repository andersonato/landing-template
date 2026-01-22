export default function Gallery({ title, subtitle, images = [] }) {
  if (!images.length) return null;

  return (
    <section
      style={{
        padding: "160px 6%",
        background:
          "linear-gradient(180deg, #0b0b0b 0%, #0f0f0f 100%)",
        color: "#fff",
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
              color: "#bdbdbd",
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
            gap: "24px",
          }}
        >
          {images.map((src, index) => {
            const isHero = index === 0;

            return (
              <div
                key={index}
                style={{
                  gridColumn: isHero ? "span 6" : "span 3",
                  height: isHero ? "420px" : "260px",
                  borderRadius: "22px",
                  overflow: "hidden",
                  backgroundColor: "#1a1a1a",
                }}
              >
                <img
                  src={src}
                  alt={`Galeria ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
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
