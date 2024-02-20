import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Card from "../../components/Cards";
import { Link } from "react-router-dom";
import products from "../../datas/products.json";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";

const Products = () => {
  return (
    <>
      <Header picture={"/medias/images/atelier/atelier12.webp"} />
      <div className="pageWrapper">
        <div className="pageWrapper-content">
          <h1 className="productsPage-title">
            Découvrez ma collection de couteaux faits main
          </h1>
          <section className="cardWrapper spaceEvenly marginBottom">
            <div className="products-linkWrapper" data-aos="fade-up">
              <Link to="/pollux" className="cardWrapper-links">
                <Card
                  picture={`/medias/images/pollux/pollux12.webp`}
                  alt="Carte couteau Pollux"
                  text="Pollux"
                />
                <h2>Pollux</h2>
              </Link>
              <p className="products-linkWrapper-txt">
                Créé d'après une pale d'hélice du C-160 Transall qui a servi
                d'inspiration pour le manche du couteau.
              </p>
            </div>
            <div className="products-linkWrapper" data-aos="fade-up">
              <Link to="/apero" className="cardWrapper-links">
                <Card
                  picture={`/medias/images/apero/apero3.webp`}
                  alt="Carte couteau Apéro"
                  text="Apéro"
                />
                <h2>Apéro</h2>
              </Link>
              <p className="products-linkWrapper-txt">
                À quel moment de convivialité a-t-on le plus besoin d'un couteau
                si ce n'est lors de l'apéritif ?<br /> La lame de ce couteau a
                été forgée avec un décapsuleur à l'extrémité.
              </p>
            </div>
          </section>
          <section className="sectionContent">
            <div
              className="sectionContent-txt sectionContent-txt--lg"
              data-aos="zoom-in"
            >
              <h2>
                Découvrez l'art de la coutellerie avec des couteaux fait main :
                des pièces uniques à la fois belles et fonctionnelles !
              </h2>
              <p>
                Je suis persuadé que les couteaux sont plus que de simples
                outils - ils sont une expression de l'art et des compétences.
                C'est pourquoi chacun de mes couteaux est fabriqué à la main
                avec le plus grand soin et une attention particulière aux
                détails.
                <br />
                <br />
                Chaque pièce est non seulement belle, mais aussi très
                fonctionnelle. Des designs classiques aux plus modernes,
                l'ensemble des couteaux faits maison met en valeur la
                polyvalence de cet outil intemporel.
                <br />
                <br />
                Que vous soyez collectionneur ou un chef, je m'efforce de mettre
                tout en œuvre pour que mes couteaux vous plaisent avec leurs
                manches divers et leurs lames tranchantes et précises. Explorez
                la galerie de couteaux faits maison aujourd'hui et découvrez par
                vous-même la beauté et la fonctionnalité de ces pièces uniques.
                <br />
                <br />
                Chaque couteau est une pièce unique en son genre, fabriqué avec
                passion et dévouement.
              </p>
            </div>
          </section>
          <section className="products">
            <h2>Explorez notre sélection de couteaux disponibles</h2>
            <div className="products-gallery">
              {products.map((product, index) => (
                <ProductCard
                  name={product.name}
                  image={product.url}
                  description={product.description}
                  price={product.price}
                  key={index}
                  link={product.link}
                  materials={product.materials}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
