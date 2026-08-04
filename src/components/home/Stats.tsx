export default function Stats() {
  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "1200+", label: "Handmade Products" },
    { number: "50+", label: "Verified Sellers" },
    { number: "10+", label: "Cities Served" },
  ];

  return (
    <section
      style={{
        background: "#0D0D0D",
        color: "white",
        padding: "80px 20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#D4AF37",
          fontSize: "42px",
          marginBottom: "50px",
        }}
      >
        📊 Zinam Marketplace
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {stats.map((item) => (
          <div
            key={item.label}
            style={{
              background: "#1A1A1A",
              border: "1px solid #D4AF37",
              borderRadius: "16px",
              padding: "30px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                color: "#D4AF37",
                fontSize: "40px",
                marginBottom: "10px",
              }}
            >
              {item.number}
            </h2>

            <p
              style={{
                color: "#CCCCCC",
                fontSize: "18px",
              }}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
