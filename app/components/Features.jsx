export default function Features({ items }) {
  return (
    <section className="features">
      <div className="container">
        <div className="features-grid">
          {items.map((item, index) => (
            <div key={index} className="feature-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
