function About() {
  return (
    <section
      id="about"
      style={{
        padding: "80px 20px",
        background: "#f9f9f9",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>About Me</h2>
      <p
        style={{
          fontSize: "1.1rem",
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: "1.7",
          color: "#555",
        }}
      >
        I’m a creative and detail-oriented developer who loves solving
        problems and building impactful projects. I enjoy working with
        technologies like <b>React</b>, <b>Node.js</b>, and <b>Express</b> to
        craft beautiful and efficient solutions.
      </p>
    </section>
  );
}

export default About;
