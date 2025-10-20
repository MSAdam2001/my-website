import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Achievements from "./Achievements";
import Hero from "./Hero";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Achievements />
            <About />
            <Blog />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
