export default function CustomOrder() {
  return (
    <section
      style={{
        background: "#FFF7ED",
        color: "white",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "#FFFFFF",
          padding: "35px",
          borderRadius: "18px",
          border: "1px solid #C85A36",
        }}
      >
        <h2
          style={{
            color: "#C85A36",
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
            color: "#7A5A4D",
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
          type="tel"
          inputMode="numeric"
          pattern="[0-9+ ]*"
          maxLength={15}
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
            background: "#C85A36",
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
  background: "#FFFFFF",
  color: "#3B2923",
};

