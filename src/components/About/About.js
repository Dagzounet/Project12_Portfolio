import DagzounetPicture from "../../assets/dagzounet.webp";
import webdevlogo from "../../assets/webdevlogo.webp";
import Services from "../Services/Services";
import AboutLogo from "../../assets/AboutLogo.webp";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    if (!document.querySelector('script[type="application/ld+json"]')) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person", //pour l'instant type person, à passer en Service lorsque j'aurais établi des offres et tarifs
        name: "Dagzounet",
        image:
          "https://dagzounet.github.io/Project12_Portfolio/static/media/dagzounet.4c724ca70557d29848a2.webp",
        jobTitle: "Front-End Web Developer",
        url: "https://dagzounet.github.io/Project12_Portfolio/#",
        description:
          "Hello everyone, I'm Dagzounet, a skilled French front-end web developer. My primary objective is to ensure that you receive the finest online experience, dedicated to bringing your dream website to life.",
      });
      script.setAttribute("defer", "");
      document.head.appendChild(script);
    }
  }, []);
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
        <p>
          I've completed the comprehensive React web developer integration
          program at OpenClassroom, undertaking 12 website projects spanning a
          total duration of 9 months. This program awards the professional
          certification "Web Developer Integrator," recognized and listed in the
          French National Directory of Professional Certifications at level 5
          (equivalent to a bachelor's degree) in both French and European
          certification frameworks (European Qualifications Framework).
        </p>
        <Services />
      </div>
    </section>
  );
}

export default About;
