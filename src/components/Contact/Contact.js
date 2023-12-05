import React, { useState } from "react";
import emailjs from "emailjs-com";
import ContactLogo from "../../assets/ContactLogo.webp";

function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    const { from_name, message } = e.target;

    if (!from_name.value || !message.value) {
      setError(true);
      return;
    }

    emailjs
      .sendForm(
        "service_gum4962", // Service ID
        "template_g7u9clj", // Template ID
        e.target,
        "YlgCNpx0XikTpQl6O" // Public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          setSent(true);
          setError(false);
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setError(true);
          setSent(false);
        }
      );

    e.target.reset();
  }

  return (
    <section className="Contact" id="contact">
      <img src={ContactLogo} alt="Logo with text Contact me" />
      <form onSubmit={sendEmail}>
        <input type="email" name="from_name" placeholder="Your email" />
        <textarea name="message" placeholder="Your message"></textarea>
        <button type="submit">Send</button>
      </form>
      {sent && <p>Email sent successfully!</p>}
      {error && (
        <p>There was a problem sending the email. Please try again later.</p>
      )}
    </section>
  );
}

export default Contact;
