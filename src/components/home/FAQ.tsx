export default function FAQ() {
  return (
    <section
      style={{
        background: "#0D0D0D",
        color: "white",
        padding: "80px 20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#D4AF37",
          fontSize: "42px",
          marginBottom: "40px",
        }}
      >
        ❓ Frequently Asked Questions
      </h2>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          lineHeight: "2",
        }}
      >
        <h3 style={{ color: "#D4AF37" }}>
          How can I place a custom order?
        </h3>
        <p>
          Fill out the custom order form and submit your request.
        </p>

        <h3 style={{ color: "#D4AF37", marginTop: "25px" }}>
          Do you deliver all over Pakistan?
        </h3>
        <p>
          Yes, we deliver nationwide.
        </p>

        <h3 style={{ color: "#D4AF37", marginTop: "25px" }}>
          Can I become a seller?
        </h3>
        <p>
          Yes, anyone can register as a seller after verification.
        </p>
      </div>
    </section>
  );
}
