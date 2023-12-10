/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../../assets/logo.webp";

function Header() {
  return (
    <header>
      <img src={logo} alt="le logo de dagzounet" />
      <a href="#" alt="About">
        About
      </a>
      <a href="#skills" alt="MySkills">
        Skills
      </a>
      <a href="#works" alt="Works">
        Works
      </a>
      <a href="#contact" alt="Contact">
        Contact
      </a>
    </header>
  );
}

export default Header;
