export default function Features() {
  const features = [
    {
      icon: "🧶",
      title: "100% Handmade",
      desc: "Every product is crafted with love and care.",
    },
    {
      icon: "🚚",
      title: "Delivery Across Pakistan",
      desc: "Nationwide delivery available.",
    },
    {
      icon: "💻",
      title: "Digital Downloads",
      desc: "Instant access to premium digital products.",
    },
    {
      icon: "🛡️",
      title: "Secure Shopping",
      desc: "Safe and trusted shopping experience.",
    },
  ];

  return (
    <section
      style={{
        background: "#FFF7ED",
        padding: "80px 20px",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
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
          Why Choose Zinam?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "25px",
          }}
        >
          {features.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#FFFFFF",
                border: "1px solid #C85A36",
                borderRadius: "16px",
                padding: "30px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "50px" }}>{item.icon}</div>

              <h3
                style={{
                  color: "#C85A36",
                  marginTop: "20px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#7A5A4D",
                  lineHeight: "1.6",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
