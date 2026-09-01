export default function FeaturedProducts() {
  const products = [
    {
      name: "Crochet Teddy",
      price: "Rs. 2,500",
      rating: "⭐⭐⭐⭐⭐",
      badge: "NEW",
      image: "🧸",
    },
    {
      name: "Handmade Bag",
      price: "Rs. 3,200",
      rating: "⭐⭐⭐⭐⭐",
      badge: "BEST SELLER",
      image: "👜",
    },
    {
      name: "Digital Pattern",
      price: "Rs. 850",
      rating: "⭐⭐⭐⭐",
      badge: "DIGITAL",
      image: "💻",
    },
  ];

  return (
    <section
      style={{
        background: "#FFF7ED",
        color: "white",
        padding: "80px 20px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "auto" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#C85A36",
            fontSize: "42px",
            marginBottom: "50px",
          }}
        >
          Featured Products
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "25px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.name}
              style={{
                background: "#FFFFFF",
                border: "1px solid #C85A36",
                borderRadius: "18px",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  background: "#C85A36",
                  color: "#000",
                  display: "inline-block",
                  padding: "4px 10px",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  marginBottom: "15px",
                }}
              >
                {product.badge}
              </div>

              <div style={{ fontSize: "70px", marginBottom: "15px" }}>
                {product.image}
              </div>

              <h3 style={{ color: "#C85A36" }}>{product.name}</h3>

              <p>{product.rating}</p>

              <h4>{product.price}</h4>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <button
                  style={{
                    background: "#C85A36",
                    color: "#000",
                    border: "none",
                    padding: "10px 16px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  🛒 Add to Cart
                </button>

                <button
                  style={{
                    background: "transparent",
                    color: "#C85A36",
                    border: "1px solid #C85A36",
                    padding: "10px 16px",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  👁 View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
