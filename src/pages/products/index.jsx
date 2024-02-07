import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Card from "../../components/Cards";
import CardGallery from "../../components/Cards/CardGallery";
import { Link } from "react-router-dom";
import data from "../../datas/data.json";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";

const Products = () => {
  const pictures = data.couteaux;

  return (
    <>
      <Header picture={"/medias/images/atelier/atelier12.webp"} />
      <div className="pageWrapper">
        <div className="pageWrapper-content">
          <div className="title" data-aos="fade-up">
            <h1>L'expérience d'un savoir-faire exceptionnel</h1>
          </div>
          <section className="cardWrapper spaceEvenly marginBottom">
            <div className="products-linkWrapper" data-aos="fade-up">
              <Link to="/pollux" className="cardWrapper-links">
                <Card
                  picture={`/medias/images/pollux/pollux12.webp`}
                  alt="Carte couteau Pollux"
                  text="Pollux"
                />
              </Link>
              <p className="products-linkWrapper-txt">
                ...inspiré de la pale du fameux C-160 Transall
              </p>
            </div>
            <div className="products-linkWrapper" data-aos="fade-up">
              <Link to="/apero" className="cardWrapper-links">
                <Card
                  picture={`/medias/images/apero/apero3.webp`}
                  alt="Carte couteau Apéro"
                  text="Apéro"
                />
              </Link>
              <p className="products-linkWrapper-txt">
                A quel moment de convivialité a-t-on le plus besoin d’un couteau
                si ce n’est l’apéritif ?
              </p>
            </div>
          </section>
          <div className="title" data-aos="fade-up">
            <h2>
              Découvrez l'art de la coutellerie avec des couteaux fait main :
              des pièces uniques à la fois belles et fonctionnelles !
            </h2>
          </div>
          <p className="txt" data-aos="fade-up">
            Je suis persuadé que les couteaux sont plus que de simples outils -
            ils sont une expression de l'art et des compétences. C'est pourquoi
            chacun de mes couteaux sont fabriqués à la main avec le plus grand
            soin et une attention particulière aux détails. Chaque pièce est non
            seulement belle, mais aussi très fonctionnelle. Des designs
            classiques aux plus modernes, l'ensemble des couteaux faits maison
            met en valeur la polyvalence de cet outil intemporel. Que vous soyez
            collectionneur ou un chef, je m'efforce de tout mettre en œuvre pour
            que mes couteaux vous plaisent avec leurs manches divers et leurs
            lames tranchantes et précises. Explorez la galerie de couteaux faits
            maison aujourd'hui et découvrez par vous-même la beauté et la
            fonctionnalité de ces pièces uniques. Chaque couteau est une pièce
            unique en son genre, fabriqué avec passion et dévouement.
          </p>
          <section className="galleryWrapper" data-aos="fade-right">
            {pictures.map((element, index) => (
              <ul key={`${element}-${index}`}>
                <li data-aos="zoom-in">
                  <CardGallery picture={element} />
                </li>
              </ul>
            ))}
          </section>
          <section className="productGallery">
            <ProductCard
              title="couteau"
              image="/medias/images/apero/apero3.webp"
              text="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page."
              price="10€"
            />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
