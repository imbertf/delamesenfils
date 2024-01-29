import React from "react";

const Card = ({ picture, alt, text }) => {
    return (
        <div className="cardContent">
            <figure>
                <img src={picture} alt={alt} />
                <figcaption>{text}</figcaption>
            </figure>
        </div>
    );
};

export default Card;
