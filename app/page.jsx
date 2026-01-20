import Features from "./components/Features";

const featuresData = [
  {
    title: "Entrega rápida",
    description: "Landing pages profissionais entregues em poucas horas."
  },
  {
    title: "Foco em conversão",
    description: "Estrutura pensada para gerar leads e vendas."
  },
  {
    title: "Design sob medida",
    description: "Visual adaptado ao posicionamento do seu negócio."
  }
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Criamos sites rápidos, claros e prontos para vender</h1>
          <p>
            Desenvolvemos landing pages profissionais com foco total em conversão.
          </p>
          <button>Solicitar proposta</button>
        </div>
      </section>

      <Features items={featuresData} />
    </main>
  );
}
