import WorksLogo from "../../assets/WorksLogo.webp";
import Carousel from "../Carousel/Carousel";
import KasaWork from "../../assets/works/KasaWork.webp";
import SophieWork from "../../assets/works/SophieWork.webp";
import ArgentBankWork from "../../assets/works/ArgentBankWork.webp";
import OhmyfoodWork from "../../assets/works/OhmyfoodWork.webp";

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
        "This project constitutes a portfolio tailored for a fictional character named Sophie Bluel. It aimed to advance proficiency in JavaScript by establishing essential API calls to bridge the front-end and back-end functionalities. The project also entailed constructing a secure login webpage with robust token management. Notably, it enables administrators to log in, retrieve gallery works from the backend, and implement edit functionalities such as delete or upload new works via modal windows. Those interactions allows administrators to manage the content displayed on the website effectively. The project emphasizes security with token usage, seamless backend/frontend integration, and efficient content management.",
    },
    {
      img: ArgentBankWork,
      githubLink: "https://github.com/Dagzounet/Project11_ArgentBank",
      description:
        "The primary objective of this project was to create a user-friendly web application that allows users to manage their personal accounts, and in the future view transaction history. The project involved the implementation of Redux to efficiently manage and update application states, enabling seamless integration between various components while maintaining data consistency via API calls and tokens. Additionally, a user-friendly modal was designed to facilitate username changes when user is logged in, enhancing the overall experience. Furthermore, the project emphasized understanding Swagger endpoints to create and manage API endpoints effectively, ensuring robust backend functionality and API interaction.",
    },
    {
      img: OhmyfoodWork,
      githubLink: "https://dagzounet.github.io/Project4_OhMyFood/",
      description:
        "The Ohmyfood project's goal was to create a captivating and responsive website. The project showcased numerous CSS animations, including a loading screen, heart animations, fade effects upon entering restaurant pages, and select animations for meal selections. All those animations helps to create a dynamic interface that captivates users while navigating through the website, ensuring an enjoyable and immersive browsing experience.",
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
