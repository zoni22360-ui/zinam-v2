export default function AdminPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0D0D0D",
        color: "#fff",
        padding: "40px",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ color: "#D4AF37", fontSize: "40px" }}>
        Zinam Admin Dashboard
      </h1>

      <p style={{ marginTop: "10px", color: "#ccc" }}>
        Welcome, Zoni 👑
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        <button>➕ Add Product</button>
        <button>📦 Manage Products</button>
        <button>🛒 Orders</button>
        <button>👥 Customers</button>
        <button>🏪 Sellers</button>
        <button>⚙️ Settings</button>
      </div>
    </main>
  );
}
