import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Works from "../../components/Works/Works";

function Home() {
  return (
    <main>
      <About />
      <div className="separator"></div>
      <Skills />
      <div className="separator"></div>
      <Works />
      <section id="contact">Contact</section>
    </main>
  );
}

export default Home;
