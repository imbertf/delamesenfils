import React from "react";

const Button = ({ type, text, className, onClick }) => {
    return (
        <button className={className} type={type} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
