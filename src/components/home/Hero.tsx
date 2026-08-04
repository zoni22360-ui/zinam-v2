export default function Hero() {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg,#0D0D0D 0%, #1A1A1A 50%, #000000 100%)",
        color: "white",
        padding: "100px 20px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          color: "#D4AF37",
          fontWeight: "bold",
          letterSpacing: "2px",
          marginBottom: "15px",
        }}
      >
        ✨ PREMIUM HANDMADE MARKETPLACE
      </p>

      <h1
        style={{
          fontSize: "56px",
          color: "#D4AF37",
          marginBottom: "20px",
        }}
      >
        Welcome to Zinam
      </h1>

      <p
        style={{
          maxWidth: "700px",
          margin: "auto",
          color: "#CCCCCC",
          fontSize: "18px",
          lineHeight: "1.8",
        }}
      >
        Discover premium handmade crochet products, digital downloads,
        personalized gifts and support talented small business owners from
        Pakistan.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "40px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="/shop"
          style={{
            background: "#D4AF37",
            color: "#000",
            padding: "15px 28px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          🛍 Shop Now
        </a>

        <a
          href="#custom-order"
          style={{
            border: "2px solid #D4AF37",
            color: "#D4AF37",
            padding: "15px 28px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          ✨ Custom Order
        </a>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginTop: "60px",
          flexWrap: "wrap",
        }}
      >
        <div>🚚  Delivery nationwide </div>
        <div>⭐ Premium Quality</div>
        <div>🧶 Handmade with Love</div>
        <div>💛 Trusted Marketplace</div>
      </div>
    </section>
  );
}
