import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ title, image, text, price }) => {
  return (
    <div className="productCard">
      <div className="productCard__title">
        <h3>{title.toUpperCase()}</h3>
      </div>
      <div className="productCard__img">
        <img src={image} alt={`Couteau ${title}`} />
      </div>
      <div className="productCard__content">
        <h3>{title}</h3>
        <p className="productCard__content_txt">{text}</p>
        <p className="productCard__content_price">
          <span>
            <Link to="#">Commander</Link>
          </span>
          <span>{price}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
