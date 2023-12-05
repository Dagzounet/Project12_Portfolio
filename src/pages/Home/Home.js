import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";

function Home() {
  return (
    <main>
      <About />
      <div className="separator"></div>
      <Skills />
      <div className="separator"></div>
      <section id="projects">Projects</section>
      <section id="contact">Contact</section>
    </main>
  );
}

export default Home;
