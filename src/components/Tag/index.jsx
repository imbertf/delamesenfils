import React from "react";

const Tag = ({ texte, className }) => {
    return (
        <div className="tag">
            <p className={className}>{texte}</p>
        </div>
    );
};

export default Tag;
