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
        background: "#F8FCF9",
        color: "white",
        padding: "80px 20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#78B9A5",
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
              background: "#FFFFFF",
              border: "1px solid #78B9A5",
              borderRadius: "16px",
              padding: "30px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                color: "#78B9A5",
                fontSize: "40px",
                marginBottom: "10px",
              }}
            >
              {item.number}
            </h2>

            <p
              style={{
                color: "#5F756D",
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
