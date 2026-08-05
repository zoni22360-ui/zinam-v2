export default function AdminProductsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0D0D0D",
        color: "white",
        padding: "40px",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ color: "#D4AF37", marginBottom: "30px" }}>
        ➕ Add New Product
      </h1>

      <form
        style={{
          display: "grid",
          gap: "18px",
          maxWidth: "700px",
        }}
      >
        <input placeholder="Product Name" />

        <input type="number" placeholder="Price" />

        <input type="number" placeholder="Sale Price (Optional)" />

        <textarea placeholder="Short Description" rows={3}></textarea>

        <textarea placeholder="Full Description" rows={6}></textarea>

        <select>
          <option>Select Category</option>
          <option>Bags</option>
          <option>Keychains</option>
          <option>Toys</option>
          <option>Flowers</option>
          <option>Digital Products</option>
        </select>

        <select>
          <option>Select Badge</option>
          <option>NEW</option>
          <option>BEST SELLER</option>
          <option>SALE</option>
        </select>

        <input type="number" placeholder="Stock Quantity" />

        <input type="file" multiple />

        <button
          style={{
            background: "#D4AF37",
            color: "#000",
            padding: "15px",
            border: "none",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          🚀 Publish Product
        </button>
      </form>
    </main>
  );
}
