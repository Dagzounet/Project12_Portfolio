import WorksLogo from "../../assets/WorksLogo.webp";
import Carousel from "../Carousel/Carousel";
import KasaWork from "../../assets/works/KasaWork.webp";
import SophieWork from "../../assets/works/SophieWork.webp";

function Works() {
  const cardsData = [
    {
      img: KasaWork,
      githubLink: "https://github.com/Dagzounet/Project8_Kasa",
      description:
        "This project demonstrates the creation of a responsive web application for house and apartment rentals using React, React Router, and SASS/SCSS. The primary focus was on leveraging JSX to craft various pages with dynamic functionality. It involved fetching data from a JSON file via API calls, dynamically showcasing this data, and efficiently managing props by designing and reusing components throughout the website. The implementation emphasizes a user-friendly interface and seamless interaction for users exploring rental options.",
    },
    {
      img: SophieWork,
      githubLink: "https://github.com/Dagzounet/Project6_SophieBluel",
      description:
        "This project constitutes a portfolio tailored for a fictional character named Sophie Bluel. It aimed to advance proficiency in JavaScript by establishing essential API calls to bridge the front-end and back-end functionalities. The project also entailed constructing a secure login webpage with robust token management. Notably, it enables administrators to log in, retrieve gallery works from the backend, and implement edit functionalities such as delete or upload new works via modal windows. This interaction allows administrators to manage the content displayed on the website effectively. The project emphasizes security, seamless backend/frontend integration, and efficient content management.",
    },
  ];

  return (
    <section className="Works">
      <img src={WorksLogo} alt="Logo with text my works"></img>
      <Carousel cardsData={cardsData} />
    </section>
  );
}

export default Works;
