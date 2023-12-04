import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";

function Home() {
  return (
    <main>
      <About />
      <Skills />
      <section id="projects">Projects</section>
      <section id="contact">Contact</section>
    </main>
  );
}

export default Home;
