export default function Gallery({ title, subtitle, images = [] }) {
  if (!images.length) return null;

  return (
    <section
      style={{
        padding: "100px 8%",
        backgroundColor: "#0f0f0f",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {title && (
          <h2
            style={{
              fontSize: "2.4rem",
              fontWeight: "700",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            {title}
          </h2>
        )}

        {subtitle && (
          <p
            style={{
              fontSize: "1.1rem",
              color: "#ccc",
              marginBottom: "48px",
              textAlign: "center",
            }}
          >
            {subtitle}
          </p>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              style={{
                width: "100%",
                height: "220px",
                backgroundColor: "#222",
                borderRadius: "14px",
                overflow: "hidden",
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
          ))}
        </div>
      </div>
    </section>
  );
}
