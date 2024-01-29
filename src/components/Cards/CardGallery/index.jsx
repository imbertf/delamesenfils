import React from "react";

const index = ({ picture }) => {
    return (
        <div className="cardGalleryWrapper">
            <img src={`/medias/images/${picture}`} alt="Couteau" />
        </div>
    );
};

export default index;
