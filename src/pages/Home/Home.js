import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Works from "../../components/Works/Works";
import Contact from "../../components/Contact/Contact";

function Home() {
  return (
    <main>
      <About />
      <div className="separator" id="skills"></div>
      <Skills />
      <div className="separator" id="works"></div>
      <Works />
      <div className="separator" id="contact"></div>
      <Contact />
    </main>
  );
}

export default Home;
