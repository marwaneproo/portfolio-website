function Contact() {
  return (
    <section className="contact" style={{ padding: "60px 20px", textAlign: "center" }}>
      <h2 style={{ color: "#fff", fontSize: "32px", marginBottom: "30px" }}>Contact</h2>

      <div
        className="card"
        style={{
          background: "rgba(2,6,23,0.85)",
          padding: "30px",
          margin: "0 auto",
          maxWidth: "600px",
          borderRadius: "14px",
          border: "1px solid rgba(56,189,248,0.15)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
        }}
      >
        <p style={{ marginBottom: "20px", fontSize: "18px", color: "#94A3B8" }}>
          Feel free to contact me for collaborations or opportunities.
        </p>

        {/* FORMULAIRE MAILTO avec Subject */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const subject = e.target.subject.value;
            const message = e.target.message.value;
            const mailtoLink = `mailto:marwanelabbadi05@gmail.com?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(message)}`;
            window.location.href = mailtoLink;
          }}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #334155",
              background: "#020617",
              color: "white",
              fontSize: "16px",
            }}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #334155",
              background: "#020617",
              color: "white",
              fontSize: "16px",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "12px",
              background: "#38BDF8",
              color: "#020617",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;


