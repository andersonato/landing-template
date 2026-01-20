export default function Home() {
  return (
    <main style={{ padding: "64px", fontFamily: "Arial, sans-serif" }}>
      <section style={{ maxWidth: 720 }}>
        <h1 style={{ fontSize: 42, marginBottom: 16 }}>
          Criamos sites rápidos, claros e prontos para vender
        </h1>

        <p style={{ fontSize: 18, marginBottom: 32 }}>
          A Uptovai desenvolve landing pages profissionais em poucas horas,
          com foco total em conversão e presença digital.
        </p>

        <a
          href="mailto:contato@uptovai.com"
          style={{
            display: "inline-block",
            padding: "14px 28px",
            background: "#000",
            color: "#fff",
            textDecoration: "none",
            borderRadius: 6,
            fontWeight: "bold",
          }}
        >
          Solicitar proposta
        </a>
      </section>
    </main>
  );
}
