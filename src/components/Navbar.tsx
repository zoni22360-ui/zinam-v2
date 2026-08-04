export default function Navbar() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        background: "#000",
        borderBottom: "1px solid #D4AF37",
      }}
    >
      <h1 style={{ color: "#D4AF37", fontSize: "28px" }}>
        Zinam
      </h1>

      <nav style={{ display: "flex", gap: "20px" }}>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>Home</a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>Shop</a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>Contact</a>
      </nav>
    </header>
  );
}
