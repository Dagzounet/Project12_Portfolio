import DagzounetPicture from "../../assets/dagzounet.webp";
import webdevlogo from "../../assets/webdevlogo.webp";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import AboutLogo from "../../assets/AboutLogo.webp";

function About() {
  return (
    <section className="About">
      <div className="imageContainer">
        <img src={DagzounetPicture} alt="picture of Dagzounet"></img>
        <img src={webdevlogo} alt="logo showing text web developer"></img>
      </div>
      <div className="descriptionServicesContainer">
        <img src={AboutLogo} alt="A logo with text about"></img>
        <p>
          Hello everyone, I'm Dagzounet, a skilled French front-end web
          developer. My primary objective is to ensure that you receive the
          finest online experience, dedicated to bringing your dream website to
          life.
        </p>
        <Services />
      </div>
    </section>
  );
}

export default About;
