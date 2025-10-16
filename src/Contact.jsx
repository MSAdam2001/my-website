function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "#fff",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Contact Me</h2>

      {/* Email */}
      <p style={{ fontSize: "1.1rem", color: "#444", marginBottom: "10px" }}>
        📧 <b>Email:</b> mujaheedgithub2001@gmail.com
      </p>

      {/* Phone */}
      <p style={{ fontSize: "1.1rem", color: "#444", marginBottom: "10px" }}>
        📞 <b>Phone:</b> +234 (706) 941-9285
      </p>

      {/* GitHub */}
      <p style={{ fontSize: "1.1rem", color: "#444", marginBottom: "10px" }}>
        💻 <b>GitHub:</b>{" "}
        <a
          href="https://github.com/MSAdam2001"
          style={{
            color: "#3b82f6",
            textDecoration: "none",
            fontWeight: "500",
          }}
          target="_blank"
          rel="noreferrer"
        >
          github.com/MSAdam2001
        </a>
      </p>

      {/* Facebook */}
      <p style={{ fontSize: "1.1rem", color: "#444" }}>
        🌐 <b>Facebook:</b>{" "}
        <a
          href="https://www.facebook.com/share/1Crjcp1Juv/"
          style={{
            color: "#3b82f6",
            textDecoration: "none",
            fontWeight: "500",
          }}
          target="_blank"
          rel="noreferrer"
        >
          facebook.com/Mujaheed
        </a>
      </p>
    </section>
  );
}

export default Contact;
