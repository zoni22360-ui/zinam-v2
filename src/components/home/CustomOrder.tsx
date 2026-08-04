export default function CustomOrder() {
  return (
    <section
      style={{
        background: "#0D0D0D",
        color: "white",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "#1A1A1A",
          padding: "35px",
          borderRadius: "18px",
          border: "1px solid #D4AF37",
        }}
      >
        <h2
          style={{
            color: "#D4AF37",
            textAlign: "center",
            fontSize: "40px",
            marginBottom: "15px",
          }}
        >
          ✨ Custom Order
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#CCCCCC",
            marginBottom: "35px",
          }}
        >
          Design your own handmade crochet product.
        </p>

        <input
          placeholder="Your Name"
          style={inputStyle}
        />

        <input
          placeholder="WhatsApp Number"
          style={inputStyle}
        />

        <input
          placeholder="Product Name"
          style={inputStyle}
        />

        <select style={inputStyle}>
          <option>Select Color</option>
          <option>Black</option>
          <option>White</option>
          <option>Pink</option>
          <option>Brown</option>
          <option>Custom</option>
        </select>

        <select style={inputStyle}>
          <option>Select Size</option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>

        <textarea
          rows={5}
          placeholder="Describe your custom order..."
          style={{
            ...inputStyle,
            resize: "vertical",
          }}
        />

        <input
          type="file"
          style={{
            width: "100%",
            marginBottom: "25px",
            color: "white",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "16px",
            background: "#D4AF37",
            color: "#000",
            border: "none",
            borderRadius: "12px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          📱 Submit Custom Order
        </button>
      </div>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "15px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #555",
  background: "#111",
  color: "white",
};

