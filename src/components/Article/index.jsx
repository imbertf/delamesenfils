import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

const Article = ({ title, text, picture, alt }) => {
    // useEffect(() => {
    //     AOS.init({ duration: 2000 });
    // }, []);
    return (
        <article className="articleContent">
            <div className="articleContent-txt" data-aos="zoom-in-right">
                <h2>{title}</h2>
                <p className="css-fix">{text}</p>
            </div>
            <div className="articleContent-img" data-aos="zoom-in-left">
                <img src={picture} alt={alt} />
            </div>
        </article>
    );
};

export default Article;
