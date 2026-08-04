export default function FeaturedProducts() {
  const products = [
    {
      name: "Crochet Teddy",
      price: "PKR 2,500",
      emoji: "🧸",
    },
    {
      name: "Luxury Handbag",
      price: "PKR 3,200",
      emoji: "👜",
    },
    {
      name: "Digital Planner",
      price: "PKR 800",
      emoji: "📄",
    },
  ];

  return (
    <section
      style={{
        background: "#0D0D0D",
        padding: "80px 20px",
        color: "white",
      }}
    >
      <h2
        style={{
          color: "#D4AF37",
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "50px",
        }}
      >
        Featured Products
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {products.map((product) => (
          <div
            key={product.name}
            style={{
              background: "#1A1A1A",
              border: "1px solid #D4AF37",
              borderRadius: "16px",
              padding: "30px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "60px" }}>{product.emoji}</div>

            <h3 style={{ color: "#D4AF37" }}>
              {product.name}
            </h3>

            <p>{product.price}</p>

            <button
              style={{
                marginTop: "15px",
                background: "#D4AF37",
                color: "#000",
                border: "none",
                padding: "12px 25px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              View Product
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
