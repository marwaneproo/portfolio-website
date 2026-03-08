import { skills } from "../data/skills";

function Skills() {
  return (
    <section
      style={{
        padding: "60px 20px",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          color: "#ffffff",
          fontSize: "32px",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Technical Skills
      </h2>

      {skills.map((skill, index) => (
        <div
          className="card"
          key={index}
          style={{
            background: "rgba(2,6,23,0.85)",
            padding: "25px 30px",
            marginBottom: "25px",
            borderRadius: "14px",
            border: "1px solid rgba(56,189,248,0.15)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
            transition: "all 0.3s ease",
          }}
        >
          <h3
            style={{
              color: "#38BDF8",
              marginBottom: "12px",
              fontSize: "22px",
            }}
          >
            {skill.category}
          </h3>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#E2E8F0",
            }}
          >
            {skill.items.join(" • ")}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Skills;