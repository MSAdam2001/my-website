import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <img src="/src/images/mujaheed.jpg" alt="Mujaheed Said" />
      <h1>
        Hello, I’m <span style={{ color: "#ffde59" }}>Mujaheed Said</span> 👋
      </h1>
      <p>
        A passionate Full Stack Web Developer building modern, dynamic, and
        user-friendly web experiences.
      </p>
    </section>
  );
}

export default Hero;
