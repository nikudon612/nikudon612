import "./App.css";
import Navbar from "./Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About.js";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <div style={{position: "absolute", bottom: "0"}}>
        <Footer />
      </div>
    </>
  );
}

export default App;
