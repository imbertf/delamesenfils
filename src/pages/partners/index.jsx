import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { TbWorld } from "react-icons/tb";

const index = () => {
  return (
    <>
      <Header picture={"./medias/images/partenariat/partenariat1.webp"} />
      <div className="pageWrapper">
        <div className="pageWrapper-content">
          <section className="partners">
            <div className="partners-article">
              <div className="partners-article-txt">
                <h2>Sellerie de Chartreuse</h2>
              </div>
              <div className="partners-article-img">
                <img
                  src={"./medias/images/partenariat/partenariat4-small.jpg"}
                  alt=""
                />
              </div>
              <div className="partners-article-txt">
                <h3>Caroline Pierrier</h3>
                <p>
                  Caroline Pierrier est artisan d'art. Professionnelle du
                  travail du cuir elle dirige la Sellerie de Chartreuse. Je
                  partage avec elle des valeurs communes sur la réalisation de
                  vos articles telles que la qualité, la solidité et
                  l'esthétique. Je lui confie la fabrication des étuis a
                  couteaux sur-mesure dont voici quelques exemples.
                </p>
                <p>
                  Le cuir , pour le plaisir de travailler une matière noble et
                  durable , le plaisir de réaliser une pièce en partant d'une
                  peau brute et de la voir se transformer pour devenir un objet
                  élégant et adapté à nos besoins
                </p>
              </div>
              <div className="partners-article-products">
                <div className="partners-article-products-img">
                  <img
                    src={"./medias/images/partenariat/partenariat7-small.jpg"}
                    alt=""
                  />
                </div>
                <div className="partners-article-products-img">
                  <img
                    src={"./medias/images/partenariat/partenariat8-small.jpg"}
                    alt=""
                  />
                </div>
                <div className="partners-article-products-img">
                  <img
                    src={"./medias/images/partenariat/partenariat9-small.jpg"}
                    alt=""
                  />
                </div>
              </div>
              <div className="partners-article-contact">
                <a
                  href="https://www.sellerie-de-chartreuse.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TbWorld /> sellerie-de-chartreuse
                </a>
              </div>
              <p>0628345556</p>
              <p>atelier.selleriedechartreuse@gmail.com</p>
            </div>
            <div className="partners-article">
              <div className="partners-article-txt">
                <h2>Belledonne création bois</h2>
              </div>
              <div className="partners-article-img">
                <img
                  src={"./medias/images/partenariat/partenariat12-small.jpg"}
                  alt=""
                />
              </div>
              <div className="partners-article-txt">
                <h3>Sebastien flores</h3>
                <p>
                  Issue d'une formation en micromécanique pour l'armement et
                  ancien militaire, le sens du détail ainsi que la rigueur pour
                  arriver à créer des oeuvres uniques guide mes travaux. L'amour
                  du travail du bois ainsi mon intéret pour les armes blanches
                  et à poudre m'ont naturellement conduits à travailler avec
                  Adrien. Nous partageons une passion commune pour l'artisanat
                  de qualité et surtout le travail du materiau brut et l'envie
                  de créer.
                </p>
              </div>
              <div className="partners-article-products">
                <div className="partners-article-products-img">
                  <img
                    src={"./medias/images/partenariat/partenariat11-small.jpg"}
                    alt=""
                  />
                </div>
                <div className="partners-article-products-img">
                  <img
                    src={"./medias/images/partenariat/partenariat13-small.jpg"}
                    alt=""
                  />
                </div>
                <div className="partners-article-products-img">
                  <img
                    src={"./medias/images/partenariat/partenariat15-small.jpg"}
                    alt=""
                  />
                </div>
              </div>
              <div className="partners-article-contact">
                <a
                  href="https://www.xn--belledonnecrationbois-m5b.site/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TbWorld /> belledonnecrationbois
                </a>
              </div>
              <p>0646572557</p>
              <p>sebastien.flores@yahoo.fr</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
