export default function Hero() {
  return (
    <section
      style={{
        minHeight: "90vh",
        background: "#0D0D0D",
        color: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <p
        style={{
          color: "#D4AF37",
          letterSpacing: "3px",
          fontSize: "16px",
          marginBottom: "15px",
        }}
      >
        ✨ HANDMADE WITH LOVE ✨
      </p>

      <h1
        style={{
          fontSize: "58px",
          color: "#D4AF37",
          margin: "0",
          fontWeight: "bold",
        }}
      >
        Zinam Marketplace
      </h1>

      <h2
        style={{
          fontSize: "28px",
          marginTop: "20px",
          color: "#FFFFFF",
          maxWidth: "700px",
          lineHeight: "1.5",
        }}
      >
        Premium Handmade Crochet & Digital Products Marketplace
      </h2>

      <p
        style={{
          color: "#CCCCCC",
          maxWidth: "700px",
          fontSize: "18px",
          lineHeight: "1.8",
          marginTop: "20px",
        }}
      >
        Discover unique handmade crochet products, premium digital templates,
        gifts, and creative collections crafted with love by talented sellers.
      </p>

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "40px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            background: "#D4AF37",
            color: "#000",
            padding: "16px 35px",
            border: "none",
            borderRadius: "12px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          🛍 Explore Store
        </button>

        <button
          style={{
            background: "transparent",
            color: "#D4AF37",
            padding: "16px 35px",
            border: "2px solid #D4AF37",
            borderRadius: "12px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Become a Seller
        </button>
      </div>
    </section>
  );
}

