export default function Services({ title, items = [] }) {
  if (!items.length) return null;

  return (
    <section
      style={{
        padding: "100px 8%",
        backgroundColor: "#ffffff",
        color: "#111",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {title && (
          <h2
            style={{
              fontSize: "2.4rem",
              fontWeight: "700",
              marginBottom: "48px",
              textAlign: "center",
            }}
          >
            {title}
          </h2>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                padding: "32px",
                borderRadius: "14px",
                backgroundColor: "#f8f8f8",
                boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "600",
                  marginBottom: "12px",
                }}
              >
                {item.name}
              </h3>

              {item.description && (
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#555",
                    marginBottom: "20px",
                  }}
                >
                  {item.description}
                </p>
              )}

              {item.price && (
                <strong
                  style={{
                    fontSize: "1.2rem",
                    color: "#000",
                  }}
                >
                  {item.price}
                </strong>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
