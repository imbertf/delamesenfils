import React, { useState, useEffect, useRef } from "react";

const ProductCard = ({ name, image, description, price, link, materials }) => {
  const [toggleImage, setToggleImage] = useState(false);
  const productCardRef = useRef(null);

  const ToggleImageHandler = () => {
    setToggleImage(!toggleImage);
  };

  const CloseImageOnOutsideClick = (event) => {
    if (
      toggleImage &&
      productCardRef.current &&
      !productCardRef.current.contains(event.target)
    ) {
      setToggleImage(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", CloseImageOnOutsideClick);

    return () => {
      document.removeEventListener("click", CloseImageOnOutsideClick);
    };
  }, [toggleImage]);

  function onPhoneClick() {
    window.open(`tel:+33650769955`);
  }

  return (
    <div className="productCard" ref={productCardRef}>
      <div className="productCard__img" onClick={() => ToggleImageHandler()}>
        <img src={image} alt={`Couteau ${name}`} />
      </div>
      <div className="productCard__content">
        <h3>{name}</h3>
        <p className="productCard__content_txt">{description}</p>
        <ul className="productCard__content_materials">
          {materials.map((material, index) => (
            <li key={index}>{material}</li>
          ))}
        </ul>
        <p className="productCard__content_price">
          <span className="productCard__btn" onClick={onPhoneClick}>
            Commander
          </span>
          <span>{price}€</span>
        </p>
      </div>
      {toggleImage && (
        <div className="productCard__img-zoom">
          <img src={image} alt={`Couteau ${name}`} />
        </div>
      )}
    </div>
  );
};

export default ProductCard;
