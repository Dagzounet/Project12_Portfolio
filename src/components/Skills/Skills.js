import SkillsLogo from "../../assets/SkillsLogo.webp";
import css3 from "../../assets/css3.webp";
import html5 from "../../assets/html5.webp";
import js from "../../assets/js.webp";
import react from "../../assets/react.webp";
import sass from "../../assets/sass.webp";
import redux from "../../assets/redux.webp";

function Skills() {
  return (
    <section className="Skills" id="skills">
      <img src={SkillsLogo} alt="Logo with text myskills"></img>
      <div className="skillsContainer">
        <img src={css3} alt="logo of css3"></img>
        <img src={html5} alt="logo of html5"></img>
        <img src={js} alt="logo of js"></img>
        <img src={react} alt="logo of react"></img>
        <img src={sass} alt="logo of sass"></img>
        <img src={redux} alt="logo of redux"></img>
      </div>
    </section>
  );
}

export default Skills;
