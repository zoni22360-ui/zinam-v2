export default function Reviews() {
  const reviews = [
    {
      name: "Ayesha",
      review: "Amazing quality! My crochet doll was exactly as I imagined.",
    },
    {
      name: "Fatima",
      review: "Beautiful handmade products. Highly recommended!",
    },
    {
      name: "Sara",
      review: "Fast delivery and premium finishing. Loved it!",
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
      <h2
        style={{
          textAlign: "center",
          color: "#C85A36",
          fontSize: "42px",
          marginBottom: "50px",
        }}
      >
        ⭐ Customer Reviews
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "25px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {reviews.map((item) => (
          <div
            key={item.name}
            style={{
              background: "#FFFFFF",
              border: "1px solid #C85A36",
              borderRadius: "16px",
              padding: "25px",
            }}
          >
            <div style={{ fontSize: "22px", marginBottom: "10px" }}>
              ⭐⭐⭐⭐⭐
            </div>

            <p style={{ color: "#7A5A4D", lineHeight: "1.7" }}>
              "{item.review}"
            </p>

            <h3
              style={{
                color: "#C85A36",
                marginTop: "20px",
              }}
            >
              — {item.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
