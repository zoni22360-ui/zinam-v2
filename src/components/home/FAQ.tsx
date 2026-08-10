export default function FAQ() {
  return (
    <section
      style={{
        background: "#F8FCF9",
        color: "white",
        padding: "80px 20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#78B9A5",
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
        <h3 style={{ color: "#78B9A5" }}>
          How can I place a custom order?
        </h3>
        <p>
          Fill out the custom order form and submit your request.
        </p>

        <h3 style={{ color: "#78B9A5", marginTop: "25px" }}>
          Do you deliver all over Pakistan?
        </h3>
        <p>
          Yes, we deliver nationwide.
        </p>

        <h3 style={{ color: "#78B9A5", marginTop: "25px" }}>
          Can I become a seller?
        </h3>
        <p>
          Yes, anyone can register as a seller after verification.
        </p>
      </div>
    </section>
  );
}
