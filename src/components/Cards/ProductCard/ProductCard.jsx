import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ title, image, text, price }) => {
  return (
    <div className="productCard">
      <div className="productCard_img">
        <img src={image} alt={`Couteau ${title}`} />
      </div>
      <div className="productCard_content">
        <h3>{title}</h3>
        <p className="productCard_content_txt">{text}</p>
        <p className="productCard_content_price">
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
