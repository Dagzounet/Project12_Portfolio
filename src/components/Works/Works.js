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
        "This work was a portfolio made for a fictional character named Sophie Bluel, Here the goal was to learn and use Javascript, making some necessary call to API to connect front-end with back-end, and be able to create the log in webpage with security and token management, retrieve galery works from backend and made edit button and modal to be able to remove or send new works to server from the website when a user administrator is logged",
    },
    {
      img: SophieWork,
      githubLink: "https://github.com/Dagzounet/Project6_SophieBluel",
      description:
        "This work was a portfolio made for a fictional character named Sophie Bluel, Here the goal was to learn and use Javascript, making some necessary call to API to connect front-end with back-end, and be able to create the log in webpage with security and token management, retrieve galery works from backend and made edit button and modal to be able to remove or send new works to server from the website when a user administrator is logged",
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
