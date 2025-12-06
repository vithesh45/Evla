import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/careers" element={<Careers />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
       <Footer />
      <span className="shape circle"></span>
      <span className="shape square"></span>
      <span className="shape triangle"></span>
      <span className="shape hexagon"></span>
      {/* <span className="shape circle small"></span> */}
      <span className="shape square medium"></span>
      <span className="shape triangle small"></span>
      <span className="shape hexagon medium"></span>
    </>
  );
}

export default App;
