import React, { useState } from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import {
  SlSocialInstagram,
  SlSocialFacebook,
  SlPhone,
  SlEnvolope,
} from "react-icons/sl";

function onEmailClick() {
  window.open(`mailto:adrienj.guillot@hotmail.fr`);
}

function onPhoneClick() {
  window.open(`tel:+33650769955`);
}

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showPepiteggs = () => {
    setIsOpen(!isOpen);
  };

  return (
    <footer
      className="footerContent"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
    >
      <Logo />
      <div className="footerContent-contact">
        <ul>
          <li>0650769955</li>
          <li>
            <Link to="https://www.google.com/maps/place/282+RD+1090,+38190+Bernin/@45.2710423,5.8679361,3a,88.9y,343.86h,69.89t/data=!3m7!1e1!3m5!1sovB8Dt9IIiBechHnzK4jHA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D20.111496879833325%26panoid%3DovB8Dt9IIiBechHnzK4jHA%26yaw%3D343.8611284703346!7i16384!8i8192!4m15!1m8!3m7!1s0x478a59a55532d2a5:0x3b25dbc9076bc782!2s282+RD+1090,+38190+Bernin!3b1!8m2!3d45.2710739!4d5.8679097!16s%2Fg%2F11w3l90_6y!3m5!1s0x478a59a55532d2a5:0x3b25dbc9076bc782!8m2!3d45.2710739!4d5.8679097!16s%2Fg%2F11w3l90_6y?hl=fr&entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              aria-label="Lien vers google map">282 route départementale 1090, 38190 Bernin</Link>
          </li>
          <li>adrienj.guillot@hotmail.fr</li>
        </ul>
      </div>
      <div className="footerContent-social">
        <Link
          to="https://instagram.com/de_lames_en_fils?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noreferrer"
          aria-label="Lien vers Instagram"
        >
          <SlSocialInstagram className="footerContent-social-instagram" />
        </Link>
        <Link
          to="https://www.facebook.com/people/De-Lames-En-Fils/100057342224297/"
          target="_blank"
          rel="noreferrer"
          aria-label="Lien vers Facebook"
        >
          <SlSocialFacebook className="footerContent-social-facebook" />
        </Link>
        <SlPhone onClick={onPhoneClick} />
        <SlEnvolope onClick={onEmailClick} />
      </div>
      <p className="footerContent-webdeveloper">
        |{" "}
        <Link to="https://www.imbertf.fr/" target="_blank" rel="noreferrer">
          Website
        </Link>{" "}
        created by{" "}
        <span onClick={showPepiteggs} className="showPepiteggs">
          ©️imbertf
        </span>{" "}
        2023 | f.imbert4@gmail.com
      </p>
      <div className={isOpen ? "is-active" : "is-inactive"}>
        <div className="pepiteggsContent">
          <span className="pepiteggs">🐈‍⬛ MI MI MI ! </span>
          {/* <Link
            to="https://www.imbertf.fr/"
            className="pepiteggs"
            target="_blank"
            rel="noreferrer"
          >
            www.imbertf.fr
          </Link> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
