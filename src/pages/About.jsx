function About() {
  return (
    <section style={{ padding: "60px 20px", maxWidth: "1000px", margin: "0 auto" }}>
      <h2 style={{ color: "#ffffff", fontSize: "32px", textAlign: "center", marginBottom: "40px" }}>
        About Me
      </h2>

      {/* CARD PROFESSIONNELLE */}
      <div
        className="card"
        style={{
          background: "rgba(2,6,23,0.85)",
          padding: "25px 30px",
          marginBottom: "25px",
          borderRadius: "14px",
          border: "1px solid rgba(199, 211, 216, 0.15)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
          transition: "all 0.3s ease",
        }}
      >
        <p style={{ fontSize: "18px", marginBottom: "15px", lineHeight: "1.6" }}>
          My name is <strong>Marwane EL ABBADI</strong>. Engineering student passionate about Artificial Intelligence and innovative technological solutions.
        </p>

        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          <strong>My engineering philosophy:</strong>
          <br /> Analyze problems deeply &nbsp;•&nbsp; Understand needs &nbsp;•&nbsp; Design intelligent solutions &nbsp;•&nbsp; Optimize systems
        </p>
      </div>

      {/* LANGUAGES */}
      <div
        className="card"
        style={{
          background: "rgba(2,6,23,0.85)",
          padding: "25px 30px",
          marginBottom: "25px",
          borderRadius: "14px",
          border: "1px solid rgba(56,189,248,0.15)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
        }}
      >
        <h3 style={{ color: "#38BDF8", marginBottom: "15px" }}>Languages</h3>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px", fontSize: "18px", lineHeight: "1.6" }}>
          <li>Arabic (Native)</li>
          <li>French (Advanced)</li>
          <li>English (Fluent)</li>
        </ul>
      </div>

      {/* CLUBS */}
      <div
        className="card"
        style={{
          background: "rgba(2,6,23,0.85)",
          padding: "25px 30px",
          marginBottom: "25px",
          borderRadius: "14px",
          border: "1px solid rgba(56,189,248,0.15)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
        }}
      >
        <h3 style={{ color: "#38BDF8", marginBottom: "15px" }}>Clubs</h3>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px", fontSize: "18px", lineHeight: "1.6" }}>
          <li>Member of AI Nexus</li>
          <li>Member of Hult Prize</li>
        </ul>
      </div>

      {/* ACTIVITIES */}
      <div
        className="card"
        style={{
          background: "rgba(2,6,23,0.85)",
          padding: "25px 30px",
          marginBottom: "25px",
          borderRadius: "14px",
          border: "1px solid rgba(56,189,248,0.15)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
        }}
      >
        <h3 style={{ color: "#38BDF8", marginBottom: "15px" }}>Activities</h3>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px", fontSize: "18px", lineHeight: "1.6" }}>
          <li>Reading</li>
          <li>Ping Pong</li>
          <li>Running</li>
          <li>Drawing</li>
        </ul>
      </div>
    </section>
  );
}

export default About;