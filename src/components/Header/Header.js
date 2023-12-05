import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.webp";

function Header() {
  const location = useLocation(); //utilisation de ce hooks pour obtenir les info de l'url actuelle
  return (
    <header>
      <img src={logo} alt="le logo de dagzounet" />
      <a
        href="#"
        alt="About"
        className={location.pathname === "/" ? "underline" : ""}
      >
        About
      </a>
      <a
        href="#skills"
        alt="MySkills"
        className={location.pathname === "/skills" ? "underline" : ""}
      >
        Skills
      </a>
      <a
        href="#projects"
        alt="Projects"
        className={location.pathname === "/projects" ? "underline" : ""}
      >
        Projects
      </a>
      <a
        href="#contact"
        alt="Contact"
        className={location.pathname === "/contact" ? "underline" : ""}
      >
        Contact
      </a>
    </header>
  );
}

export default Header;
