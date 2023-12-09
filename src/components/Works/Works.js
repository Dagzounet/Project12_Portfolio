import WorksLogo from "../../assets/WorksLogo.webp";
import Carousel from "../Carousel/Carousel";
import KasaWork from "../../assets/works/KasaWork.webp";
import SophieWork from "../../assets/works/SophieWork.webp";

function Works() {
  const cardsData = [
    {
      img: KasaWork,
      githubLink: "https://github.com/Dagzounet/Project8_Kasa",
    },
    {
      img: SophieWork,
      githubLink: "https://github.com/Dagzounet/Project6_SophieBluel",
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
