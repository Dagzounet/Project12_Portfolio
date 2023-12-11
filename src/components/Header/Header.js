/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../../assets/logo.webp";

function Header() {
  return (
    <header>
      <img src={logo} alt="le logo de dagzounet" />
      <a href="#" title="About">
        About
      </a>
      <a href="#skills" title="MySkills">
        Skills
      </a>
      <a href="#works" title="Works">
        Works
      </a>
      <a href="#contact" title="Contact">
        Contact
      </a>
    </header>
  );
}

export default Header;
