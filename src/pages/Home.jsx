import React from "react";
import MarwanePhoto from "../assets/marwane.jpg"; 
function Home() {
  return (
    <section
      className="home"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        textAlign: "center",
        padding: "60px 20px",
        background: "linear-gradient(135deg, #131926, #020617)",
        color: "#E2E8F0",
      }}
    >
      {/* PHOTO PROFIL */}
      <img
        src={MarwanePhoto} //  le chemin exact de ta photo
        alt="Marwane El Abbadi"
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          border: "4px solid #ffffff",
          objectFit: "cover",
          marginBottom: "30px",
          boxShadow: "0 10px 40px rgba(108, 130, 145, 0.91)",
          transition: "transform 0.4s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />

      {/* TEXTE */}
   <h1 style={{ fontSize: "42px", marginBottom: "15px", color: "#ffffff" }}>
  Welcome to my Portfolio
</h1>

<p style={{ fontSize: "24px", fontWeight: "600", color: "#ffffff", marginBottom: "8px" }}>
  Marwane El Abbadi
</p>

<p style={{ fontSize: "18px", color: "#ffffff", marginBottom: "30px" }}>
  Engineering Student • AI Enthusiast
</p>

      {/* BOUTONS */}
      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", justifyContent: "center" }}>
        <a
          href="tel:+212644342372"
          style={{
            padding: "12px 28px",
            background: "linear-gradient(135deg,#38BDF8,#0EA5E9)",
            color: "#020617",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
            boxShadow: "0 5px 20px rgba(56,189,248,0.4)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 8px 30px rgba(56,189,248,0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 5px 20px rgba(56,189,248,0.4)";
          }}
        >
          Contact Me
        </a>

        <a
          href="https://www.linkedin.com/in/marwane-el-abbadi"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "12px 28px",
            background: "linear-gradient(135deg,#06b6d4,#3b82f6)",
            color: "#020617",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
            boxShadow: "0 5px 20px rgba(56,189,248,0.4)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 8px 30px rgba(56,189,248,0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 5px 20px rgba(56,189,248,0.4)";
          }}
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Home;