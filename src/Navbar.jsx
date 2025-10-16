function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        background: "linear-gradient(90deg, #3b82f6, #9333ea)",
        color: "#fff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ margin: 0, fontWeight: 600 }}>MSAdam</h2>
      <ul style={{ listStyle: "none", display: "flex", gap: "20px", margin: 0 }}>
        <li><a href="#about" style={linkStyle}>About</a></li>
        <li><a href="#contact" style={linkStyle}>Contact</a></li>
      </ul>
    </nav>
  );
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "500",
  transition: "0.3s",
};

export default Navbar;
