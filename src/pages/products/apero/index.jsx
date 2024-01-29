import React from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import data from "../../../datas/data.json";
import CardGallery from "../../../components/Cards/CardGallery";
import Article from "../../../components/Article";
import { Link } from "react-router-dom";

const Apero = () => {
  const pictures = data.apero;

  return (
    <>
      <Header picture={"/medias/images/apero/apero3.webp"} />
      <div className="pageWrapper">
        <div className="pageWrapper-content">
          <div className="title" data-aos="fade-up">
            <h1 className="">Couteau Apero</h1>
          </div>
          <Article
            title={"Le couteau artisanal parfait pour l'heure de l'apéritif !"}
            text={`Imaginez des moments heureux partagés avec vos amis autour de produits naturels comme le saucisson, la bière, le fromage, le vin. Ce couteau est l'outil parfait pour vous aider à rehausser votre expérience d'apéritif. Sorti tout droit de ma forge, ce couteau n'est pas seulement un outil de découpe mais aussi un design bien particulier. La lame est tranchante et durable, fabriquée à partir des meilleurs matériaux pour assurer précision et longévité. Mais ce n'est pas tout, ce couteau est également équipé d'un décapsuleur au dos de la lame. Cette fonction vous permet d'ouvrir facilement votre bière ou soda préférée sans avoir besoin d'un outil supplémentaire. Le couteau Apéro est parfait pour ceux qui apprécient les bonnes choses de la vie et aiment les partager avec des amis. Que vous organisiez un dîner ou que vous profitiez d'une soirée décontractée, ce couteau artisanal rendra votre moment d'apéritif inoubliable. Rehausser votre expérience d'apéritif aujourd'hui avec ce couteau particulier !
                
                Le couteau se décline en deux aciers différents et un grand nombre de manches. 
                
                Le 90MCV8 :

                Acier carbone considéré comme un acier à outils, il est très résistant et donne au couteau un tranchant très tenace. Son pouvoir de coupe et son maintien dans le temps est excellent. De plus, il est facile à affûter. 
                
                Le 14C28N :

                Le 14C28N est un acier inoxydable développé par l’aciérie Sandvik, il a une très bonne résistance à la corrosion et reste particulièrement facile à ré-affûter. Son tranchant très fin assure un excellent pouvoir de coupe.`}
            picture={"/medias/images/couteaux/couteau10.webp"}
            alt={"couteau apéro"}
          />
          <section className="sectionContent flex-direction" data-aos="fade-up">
            <div className="sectionContent-txt">
              <p>
                Ce couteau est habillé par des étuis de Caroline - Artisan d'Art
                de la sellerie du Vercors qui élabore des produits artisanaux
                d'une grande qualité. Nous partageons une passion pour
                l'artisanat et un engagement à créer des produits conçus pour
                durer. Caroline se consacre à fournir à ses clients des produits
                non seulement élégants et durables.
                <br />
                <br />
                Le bois provient de chez BELLEDONNE CRÉATION BOIS par Sébastien
                FLORES
                <br />
                Création d’objets en bois grâce aux techniques de la tournerie
                et de l’ébénisterie apprises auprès des Compagnons du Tour de
                France.
              </p>
            </div>
            <div className="sectionContent-partners">
              <div className="sectionContent-img">
                <img
                  src="/medias/images/partenariat/sellerie.webp"
                  alt="Sellerie partenaire"
                />
              </div>
              <div className="sectionContent-links">
                <Link
                  to="https://www.sellerie-de-chartreuse.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sellerie de chartreuse
                </Link>
                <ul>
                  <li>
                    <a href="tel:+33628345556" target="_blank" rel="noreferrer">
                      06 28 34 55 56
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:atelier.selleriedechartreuse@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      atelier.selleriedechartreuse@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="galleryWrapper" data-aos="fade-up">
            {pictures.map((element, index) => (
              <ul key={`${element}-${index}`} data-aos="zoom-in">
                <li>
                  <CardGallery picture={element} />
                </li>
              </ul>
            ))}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Apero;
