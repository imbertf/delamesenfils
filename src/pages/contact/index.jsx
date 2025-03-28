import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";

const Contact = () => {
    return (
        <>
            <Header picture={"/medias/images/atelier/atelier3.webp"} />
            <div className="pageWrapper">
                <div className="pageWrapper-content">
                    <section className="sectionContent" data-aos="fade-up">
                        <div className="sectionContent-txt" data-aos="zoom-in">
                            <h1 style={{ color: "inherit" }}>
                                Je m'engage à fabriquer des couteaux uniques et
                                de haute qualité qui sont adaptés à vos besoins
                                et préférences individuelles.
                            </h1>
                            <p>
                                <br />
                                <br /> Je suis très fier du savoir-faire acquis
                                et je m'engage à vous offrir la meilleure
                                expérience possible. Chaque client ayant ses
                                propres désirs et besoins en matière de
                                couteaux, je vous propose une gamme d'options
                                personnalisables pour garantir que votre couteau
                                soit vraiment unique en son genre.
                                <br />
                                <br />
                                Que vous recherchiez une forme de lame
                                spécifique, un matériau de manche ou un style
                                particulier, je vous offre mon expertise pour
                                vous aider à créer le couteau parfait pour vos
                                besoins. Je n'utilise que les meilleurs
                                matériaux et techniques pour garantir que chaque
                                couteau sortant de l'atelier soit de la plus
                                haute qualité.
                                <br />
                                <br />
                                Si vous souhaitez en savoir plus sur les offres
                                ou si vous souhaitez discuter de vos besoins
                                spécifiques, je vous invite à me contacter dès
                                aujourd'hui. Pour me contacter, remplissez
                                simplement le formulaire de contact ci-dessous,
                                et je vous recontacterai dans les plus brefs
                                délais. J'attends avec impatience de vous
                                entendre et de vous aider à créer le couteau
                                parfait pour vos besoins.
                                <br />
                                <br /> Adrien
                            </p>
                        </div>
                    </section>
                    <ContactForm />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
