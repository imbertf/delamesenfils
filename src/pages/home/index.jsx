import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Article from "../../components/Article";
import Card from "../../components/Cards";
import ContactMe from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Home = () => {
  const [data, setData] = useState(null);

  const formatTimestamp = (timestamp) => {
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    };

    return new Date(timestamp).toLocaleDateString("fr-FR", options);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,username,timestamp&access_token=${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        const currentNews = result.data.slice(0, 1).map((post) => {
          return {
            ...post,
            formattedTimestamp: formatTimestamp(post.timestamp),
          };
        });
        setData(currentNews);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Header picture={"./medias/images/couteaux/couteau2-filter.webp"} />
      <div className="pageWrapper">
        <div className="pageWrapper-content">
          <section className="cardWrapper">
            <Link to="/creations" className="cardWrapper-links">
              <Card
                picture={`/medias/images/atelier/atelier4.webp`}
                alt="Carte créations"
                text="Créations"
              />
              <h2>Créations</h2>
            </Link>
            <Link to="/stages" className="cardWrapper-links">
              <Card
                picture={`/medias/images/stages/stage24-resized.webp`}
                alt="Carte stages"
                text="Stages"
              />
              <h2>Stages</h2>
            </Link>
            <Link to="/contact" className="cardWrapper-links">
              <Card
                picture={`/medias/images/atelier/atelier11-resized.webp`}
                alt="Carte contact"
                text="Contact"
              />
              <h2>Contact</h2>
            </Link>
          </section>
          <section className="sectionContent">
            <div
              className="sectionContent-txt sectionContent-txt--lg"
              data-aos="zoom-in"
            >
              <h2>Création de couteau sur mesure</h2>
              <p>
                Bienvenue dans un monde de créativité ! En tant que coutelier,
                je suis passionné par la création de couteaux personnalisés
                uniques et adaptés à vos besoins et préférences spécifiques.
                <br />
                <br /> Que vous soyez un chef professionnel à la recherche de
                l'outil parfait pour améliorer vos compétences culinaires ou un
                simple amateur envieux d'un couteau fait main, je suis là pour
                donner vie à votre vision.
                <br />
                <br /> Avec des années d'expérience dans la fabrication de
                couteaux, je m'engage à n'utiliser que les meilleurs matériaux
                et techniques pour créer un produit vraiment exceptionnel. Du
                manche à la lame, chaque aspect de votre couteau personnalisé
                sera conçu et fabriqué avec précision et soin.
                <br />
                <br />
                Donc, si vous êtes prêt à passer à l'étape suivante en possédant
                un couteau personnalisé, je vous invite à m'envoyer un message
                en utilisant le formulaire de contact ci-dessous. Échangeons
                donc sur vos idées et vos préférences, et ensemble nous créerons
                une pièce unique que vous chérirez pour les années à venir.
                <br />
                <br /> Merci de me considérer pour vos besoins de couteaux
                personnalisés, et j'ai hâte d'avoir de vos nouvelles bientôt !
              </p>
            </div>
          </section>
          <section className="gallery">
            <div className="gallery-img">
              <img src="./medias/images/atelier/atelier22.jpg" alt="" />
            </div>
            <div className="gallery-img">
              <img src="./medias/images/atelier/atelier19.jpg" alt="" />
            </div>
            <div className="gallery-img">
              <img src="./medias/images/atelier/atelier24.jpg" alt="" />
            </div>
          </section>
          <section className="sectionContent">
            <div className="sectionContent-txt" data-aos="zoom-in">
              <h2>Actualités</h2>
              <p>
                Venez à ma rencontre sur les marchés locaux de Grenoble et ses
                environs pour découvrir mes rélisations de près.
                <br />
                Echangeons et trouvez le couteau parfait pour vous.
                <br />
                <br />
                Restez informé et connecté avec De lames en fils sur{" "}
                <Link
                  to="https://instagram.com/de_lames_en_fils?igshid=YmMyMTA2M2Y="
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Lien vers Instagram"
                >
                  Instagram
                </Link>{" "}
                ou{" "}
                <Link
                  to="https://www.facebook.com/people/De-Lames-En-Fils/100057342224297/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Lien vers Facebook"
                >
                  Facebook
                </Link>
                .
                <br />
                Explorez les actualités de De lames en fils pour plonger dans
                l'art de la coutellerie, que ce soit à travers mes créations
                exceptionnelles, mes stages de formation enrichissants ou sur
                les marchés en Isère.
              </p>
              <div className="sectionContent-news">
                {data
                  ? data.map((post, index) => (
                      <article className="newsCard" key={index}>
                        <div className="newsCard-img">
                          <img src={post.media_url} alt="" />
                        </div>
                        <div className="newsCard-txt">
                          <p>{post.caption}</p>
                          <p className="newsCard-txt-signature">
                            {post.username}
                            <br />
                            {post.formattedTimestamp}
                          </p>
                        </div>
                      </article>
                    ))
                  : ""}
              </div>
            </div>
          </section>
          <Article
            title={"Adrien Guillot"}
            text={`Grenoblois depuis toujours, attaché à notre belle région et à ses paysages, je me suis permis de la quitter quelques temps afin d’assouvir mes rêves d’aéronautique militaire. Après une expérience en tant que moniteur dans l’armée de l’air, me voici de retour dans le bassin grenoblois.

                Début 2018, les premiers coups de marteau contre de la ferraille chaude au sein de l’atelier L.E.T dans le Trièves me permettent de me rendre compte à quel point il était plaisant de travailler, transformer , et créer des matières nobles telles que le bois et l’acier.
                
                La rigueur et le goût de l’effort inculqués par l’armée, le goût de la transmission et le plaisir de créer se concrétisent en 2019 avec la création de De Lames En Fils. L’envie de vivre de nouveau guidé par le cœur, je souhaite travailler de mes mains et en permanence créer, développer et penser à de nouveaux projets.
                
                Après un certain nombre de couteaux confectionnés et d’échanges avec des clients, amateurs et simples curieux, Je propose maintenant des stages de confections de couteaux ou passionnés et néophytes ont la possibilité de venir créer leur couteaux à l’atelier.
                `}
            picture={"./medias/images/atelier/atelier12.webp"}
            alt={"Adrien"}
          />
          {/* <section className="sectionContent">
            <div className="sectionContent-txt" data-aos="zoom-in">
              <h2>Création de couteau sur mesure</h2>
              <p>
                Bienvenue dans un monde de créativité ! En tant que coutelier,
                je suis passionné par la création de couteaux personnalisés
                uniques et adaptés à vos besoins et préférences spécifiques.
                <br />
                <br /> Que vous soyez un chef professionnel à la recherche de
                l'outil parfait pour améliorer vos compétences culinaires ou un
                simple amateur envieux d'un couteau fait main, je suis là pour
                donner vie à votre vision.
                <br />
                <br /> Avec des années d'expérience dans la fabrication de
                couteaux, je m'engage à n'utiliser que les meilleurs matériaux
                et techniques pour créer un produit vraiment exceptionnel. Du
                manche à la lame, chaque aspect de votre couteau personnalisé
                sera conçu et fabriqué avec précision et soin.
                <br />
                <br />
                Donc, si vous êtes prêt à passer à l'étape suivante en possédant
                un couteau personnalisé, je vous invite à m'envoyer un message
                en utilisant le formulaire de contact ci-dessous. Échangeons
                donc sur vos idées et vos préférences, et ensemble nous créerons
                une pièce unique que vous chérirez pour les années à venir.
                <br />
                <br /> Merci de me considérer pour vos besoins de couteaux
                personnalisés, et j'ai hâte d'avoir de vos nouvelles bientôt !
              </p>
            </div>
          </section> */}
          <ContactMe />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
