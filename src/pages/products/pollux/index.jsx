import React from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import data from "../../../datas/data.json";
import CardGallery from "../../../components/Cards/CardGallery";
import Article from "../../../components/Article";

const Pollux = () => {
    const pictures = data.pollux;

    return (
        <>
            <Header picture={"/medias/images/pollux/pollux1-filter.webp"} />
            <div className="pageWrapper">
                <div className="pageWrapper-content">
                    <div className="title" data-aos="fade-up">
                        <h1 className="">Couteau le Pollux</h1>
                    </div>
                    <Article
                        title={"L'ésthétisme issue de l'aviation de transport"}
                        text={`Depuis le début de mon activité, j’ai toujours cherché à créer un couteau alliant deux pans importants de ma vie. Après multiples idées avortées, griffonnages divers et variés, voici LE POLLUX.

                Un couteau de table ayant un manche inspiré de la pale du fameux C-160 Transall. Ma petite façon de le célébrer à ma manière l'année de son retrait de service après 60 ans à avoir été la bête de somme de l'Armée de l'Air. 
                
                Ce modèle en acier 90 MCV8 se décline en deux manches différents à savoir Micarta ou Carbone. `}
                        picture={"/medias/images/pollux/c160.webp"}
                        alt={"C160 Transall"}
                    />
                    <section className="galleryWrapper" data-aos="fade-right">
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

export default Pollux;
