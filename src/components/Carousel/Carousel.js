import React, { useState } from "react";
import PropTypes from "prop-types";
import githubLogo from "../../assets/githubLogo.webp";

function Carousel({ cardsData }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((Index) =>
      Index === 0 ? cardsData.length - 1 : Index - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((Index) =>
      Index === cardsData.length - 1 ? 0 : Index + 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="controlsButton arrowleft" onClick={handlePrev}>
        {"<"}
      </button>
      <button className="controlsButton arrowright" onClick={handleNext}>
        {">"}
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
