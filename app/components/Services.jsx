export default function Services({ title, items = [] }) {
  if (!items.length) return null;

  return (
    <section
      style={{
        padding: "140px 8%",
        backgroundColor: "#ffffff",
        color: "#111",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {title && (
          <h2
            style={{
              fontSize: "2.6rem",
              fontWeight: "700",
              marginBottom: "64px",
              textAlign: "center",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h2>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                padding: "40px",
                borderRadius: "18px",
                backgroundColor: "#f9f9f9",
                boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <h3
                style={{
                  fontSize: "1.6rem",
                  fontWeight: "600",
                  marginBottom: "16px",
                }}
              >
                {item.name}
              </h3>

              {item.description && (
                <p
                  style={{
                    fontSize: "1.05rem",
                    color: "#555",
                    lineHeight: "1.6",
                    marginBottom: "28px",
                  }}
                >
                  {item.description}
                </p>
              )}

              {item.price && (
                <div
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: "700",
                    color: "#000",
                  }}
                >
                  {item.price}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
