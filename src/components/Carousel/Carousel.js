import React, { useState } from "react";
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
        {cardsData.map(
          (card, index) =>
            index === currentIndex && ( // Permet d'avoir seulement la figure sélectionné en rendu dynamique
              <div key={index}>
                <figure>
                  <img className="cards" src={card.img} alt="Card" />
                  <a
                    href={card.githubLink}
                    target="_blank"
                    rel="noopener noreferrer" // pour protéger du phishing (empêche le lien avec la page parent)
                  >
                    <img className="githubLogo" src={githubLogo} alt="GitHub" />
                  </a>
                </figure>
              </div>
            )
        )}
      </div>
      <button className="controlsButton" onClick={handleNext}>
        {">"}
      </button>
    </div>
  );
}

export default Carousel;
