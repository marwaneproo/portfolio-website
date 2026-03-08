function Footer() {
  return (
    <footer
      className="footer"
      style={{
        textAlign: "center",
        padding: "30px 20px",
        background: "rgba(2,6,23,0.9)",
        borderTop: "1px solid rgba(56,189,248,0.2)",
        color: "#94A3B8",
        fontSize: "14px",
        lineHeight: "1.6",
      }}
    >
      <p style={{ marginBottom: "8px", fontWeight: "500" }}>
        © {new Date().getFullYear()} MARWANE EL ABBADI
      </p>
      <p style={{ fontStyle: "italic", color: "#cbd5e1" }}>
        Engineering Student • AI Enthusiast
      </p>
    </footer>
  );
}

export default Footer;