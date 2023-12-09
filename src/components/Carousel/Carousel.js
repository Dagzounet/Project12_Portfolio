import React, { useState } from "react";
import PropTypes from "prop-types";
import githubLogo from "../../assets/githubLogo.webp";

function Carousel({ cardsData }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="controlsButton" onClick={handlePrev}>
        {"<"}
      </button>
      <div className="carousel">
        <figure className="figure-container">
          <img className="cards" src={cardsData[currentIndex].img} alt="Card" />
        </figure>
        <a
          href={cardsData[currentIndex].githubLink}
          target="_blank"
          rel="noopener noreferrer" // pour protéger du phishing (ouvre le lien dans un nouvel onglet sans lien avec la page d'origine)
        >
          <img className="githubLogo" src={githubLogo} alt="GitHub" />
        </a>
        <p className="description">{cardsData[currentIndex].description}</p>
      </div>
      <button className="controlsButton" onClick={handleNext}>
        {">"}
      </button>
    </div>
  );
}

Carousel.propTypes = {
  cardsData: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      githubLink: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Carousel;
