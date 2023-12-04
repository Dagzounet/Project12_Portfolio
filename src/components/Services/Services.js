import ServiceLogo from "../../assets/ServiceLogo.webp";

function Services() {
  return (
    <section className="Services">
      <img src={ServiceLogo} alt="Logo what i offer"></img>
      <ul>
        <li>
          Crafting and designing your website from inception to completion.
        </li>
        <li>
          Tailoring your website's visuals and ensuring responsiveness across
          various platforms: computers, tablets, and mobile devices.
        </li>
        <li>
          Enhancing your website's performance through optimization techniques.
        </li>
        <li>
          Implementing Search Engine Optimization (SEO) strategies to enhance
          your website's visibility.
        </li>
        <li>
          Introducing new functionalities or debugging existing features for
          your website
        </li>
      </ul>
    </section>
  );
}

export default Services;
