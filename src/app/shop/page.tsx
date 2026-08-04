export default function ShopPage() {
  return (
    <main
      style={{
        background: "#0D0D0D",
        color: "white",
        minHeight: "100vh",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h1
          style={{
            color: "#D4AF37",
            textAlign: "center",
            fontSize: "48px",
            marginBottom: "10px",
          }}
        >
          Shop
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#CCCCCC",
            marginBottom: "40px",
          }}
        >
          Premium Handmade Crochet & Digital Products
        </p>

        <input
          placeholder="🔍 Search products..."
          style={{
            width: "100%",
            padding: "16px",
            borderRadius: "12px",
            border: "1px solid #D4AF37",
            background: "#1A1A1A",
            color: "white",
            marginBottom: "40px",
          }}
        />

        <h2 style={{ color: "#D4AF37" }}>
          Products Coming Soon...
        </h2>
      </div>
    </main>
  );
}
