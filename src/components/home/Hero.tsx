export default function Hero() {
  return (
    <section
      style={{
        minHeight: "90vh",
        background: "#0D0D0D",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      <p
        style={{
          color: "#D4AF37",
          letterSpacing: "6px",
          fontSize: "14px",
          marginBottom: "20px",
        }}
      >
        ✨ HANDMADE WITH LOVE ✨
      </p>

      <h1
        style={{
          color: "#D4AF37",
          fontSize: "64px",
          fontWeight: "bold",
          margin: "0",
        }}
      >
        Zinam
      </h1>

      <h2
        style={{
          fontSize: "54px",
          fontWeight: "bold",
          marginTop: "10px",
          marginBottom: "20px",
        }}
      >
        Marketplace
      </h2>

      <h3
        style={{
          fontSize: "24px",
          maxWidth: "700px",
          lineHeight: "1.5",
        }}
      >
        Premium Handmade Crochet & Digital Products Marketplace
      </h3>

      <p
        style={{
          maxWidth: "700px",
          color: "#BBBBBB",
          marginTop: "20px",
          fontSize: "18px",
          lineHeight: "1.8",
        }}
      >
        Discover unique handmade crochet products, premium digital templates,
        gifts, and creative collections crafted with love by talented sellers.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "40px",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            background: "#D4AF37",
            color: "#000",
            border: "none",
            padding: "18px 40px",
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
            border: "2px solid #D4AF37",
            padding: "18px 40px",
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
