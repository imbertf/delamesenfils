import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CardGallery from "../../components/Cards/CardGallery";
import data from "../../datas/data.json";
import Tag from "../../components/Tag";

const Stages = () => {
    // Display last picture added in data.json in first place in gallery
    // Create empty array, push data from data.json in array and reverse data
    // map() method in line 93 will call reverse array instead original array from data.json
    const pictures = data.stages;
    const arrayData = [];
    for (let e of pictures) {
        arrayData.push(e);
    }
    arrayData.reverse();

    return (
        <>
            <Header
                picture={"/medias/images/stages/stage46-cut.webp"}
                style={{ objectPosition: "top" }}
            />
            <div className="pageWrapper">
                <div className="pageWrapper-content">
                    <section className="stagesContent">
                        <div className="stagesContent-txt" data-aos-delay="100">
                            <div className="stagesContent-title">
                                <h1>
                                    {" "}
                                    Dessinez et donnez vie à votre propre
                                    couteau{" "}
                                </h1>
                            </div>
                            <p className="stagesContent-p">
                                Adrien vous accueille dans son atelier au
                                Versoud pour vous aider à réaliser votre couteau
                                de A à Z. <br />
                                <br /> Vous découvrirez les différentes étapes
                                de création d'un couteau par enlèvement de
                                matière : <br />
                                <br />
                            </p>
                            <div className="tagContent">
                                <Tag
                                    texte={"Choix de l'acier"}
                                    className={"tag-txt"}
                                />
                                <Tag
                                    texte={
                                        "Détourage et mise en forme de la lame"
                                    }
                                    className={"tag-txt"}
                                />
                                <Tag
                                    texte={
                                        "Initiation aux traitements thermiques"
                                    }
                                    className={"tag-txt"}
                                />
                                <Tag
                                    texte={"Choix du bois"}
                                    className={"tag-txt"}
                                />
                                <Tag
                                    texte={"Montage du manche"}
                                    className={"tag-txt"}
                                />
                                <Tag
                                    texte={"Finition de l'ensemble"}
                                    className={"tag-txt"}
                                />
                            </div>

                            <div className="stagesContent-div-prices">
                                Adultes, enfants accompagnés, tout le monde est
                                le bienvenu !<br /> Stage sur 2 jours
                                <br />
                                <br />
                                <span>
                                    En semaine
                                    <Tag
                                        texte={"250 €"}
                                        className={"tag-txt bg-green"}
                                    />
                                </span>
                                <span>
                                    Le week-end
                                    <Tag
                                        texte={"300 €"}
                                        className={"tag-txt bg-green"}
                                    />
                                </span>
                            </div>
                        </div>
                    </section>
                    <div className="title">
                        <h1>Les stagiaires</h1>
                    </div>
                    <section className="galleryWrapper">
                        {arrayData.map((element, index) => (
                            <ul key={`${element}-${index}`}>
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

export default Stages;
