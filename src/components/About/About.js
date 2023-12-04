import DagzounetPicture from "../../assets/dagzounet.webp";
import webdevlogo from "../../assets/webdevlogo.webp";

function About() {
  return (
    <section className="About">
      <div className="imageContainer">
        <img src={DagzounetPicture} alt="picture of Dagzounet"></img>
        <img src={webdevlogo} alt="logo showing text web developer"></img>
      </div>
      <p>Hello everyone, i'm Dagzounet, a front-end web developer</p>
    </section>
  );
}

export default About;
