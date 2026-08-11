export default function Categories() {
  const categories = [
    {
      emoji: "🧸",
      title: "Crochet Toys",
      desc: "Handmade dolls & toys",
    },
    {
      emoji: "👜",
      title: "Handmade Bags",
      desc: "Premium crochet bags",
    },
    {
      emoji: "📄",
      title: "Digital Products",
      desc: "Templates & Downloads",
    },
    {
      emoji: "🎁",
      title: "Custom Orders",
      desc: "Design your own product",
    },
  ];

  return (
    <section
      style={{
        background: "#FFF9F1",
        padding: "80px 20px",
        color: "white",
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
        Shop By Category
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
        {categories.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#FFFFFF",
              border: "1px solid #78B9A5",
              borderRadius: "16px",
              padding: "30px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "50px" }}>
              {item.emoji}
            </div>

            <h3
              style={{
                color: "#78B9A5",
                marginTop: "20px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#5F756D",
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
