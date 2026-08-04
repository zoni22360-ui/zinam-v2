export default function Navbar() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        background: "#000000",
        borderBottom: "1px solid #D4AF37",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <h1
        style={{
          color: "#D4AF37",
          fontSize: "32px",
          fontWeight: "bold",
          margin: 0,
          marginRight: "35px",        
}}
      >
        Zinam
      </h1>

      <nav
        style={{
          display: "flex",
          gap: "35px",
          alignItems: "center",
        }}
      >
        <a
          href="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Home
        </a>

        <a
          href="/shop"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Shop
        </a>

        <a
          href="#"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Categories
        </a>

        <a
          href="#"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Become Seller
        </a>

        <a
          href="#"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Contact
        </a>

        <button
          style={{
            background: "#D4AF37",
            color: "#000",
            border: "none",
            padding: "10px 18px",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </nav>
    </header>
  );
}
