import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Works from "../../components/Works/Works";
import Contact from "../../components/Contact/Contact";

function Home() {
  return (
    <main>
      <About />
      <div className="separator"></div>
      <Skills />
      <div className="separator"></div>
      <Works />
      <div className="separator"></div>
      <Contact />
    </main>
  );
}

export default Home;
