import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsHandIndexThumb } from "react-icons/bs";

const NotFound = () => {
    useEffect(() => {
        document.body.classList.add("notFound-page");
        return () => document.body.classList.remove("notFound-page");
    }, []);
    return (
        <div className="notFoundContent">
            <h1>404</h1>
            <p>NEW GAME</p>
            <nav>
                <ul>
                    <li>
                        <Link exact to="/" activeClassName="active">
                            Continue?
                        </Link>
                        <div className="pointer">
                            <BsHandIndexThumb />
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NotFound;
