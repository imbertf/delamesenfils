import React, { useState } from "react";
import Button from "../Button";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/f55a3ea0-c8c8-11ed-8bf6-65581b4c2d05";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  // Allow user to send a new message
  const handleReset = () => {
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="successMsgContent">
        <div className="successMsgContent-txt">
          <h2>Merci !</h2>
          <p>Je reviens rapidement vers vous.</p>

          <Button
            type={"submit"}
            text={"Nouveau message"}
            onClick={handleReset}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="formContent" data-aos="fade-up">
      <div className="formContent-img">
        <img src="./medias/images/atelier/atelier24.jpg" alt="" />
      </div>
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <div data-aos="fade-up">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            placeholder="Votre nom"
            name="name"
            id="name"
            required
          />
        </div>
        <div data-aos="fade-up">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Votre Email"
            name="email"
            id="email"
            required
          />
        </div>
        <div data-aos="fade-up">
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Votre message"
            name="message"
            id="message"
            required
          />
        </div>
        <div data-aos="fade-up">
          <Button type={"submit"} text={"Envoyer"} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
