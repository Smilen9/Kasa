import React, { useState } from "react";
import Arrow from "./Arrow";

const MenuDeroulant = ({ menu, header, paragraphe, titre, texte }) => {
    const [state, setState] = useState(false);

    const arrowStyle = {
        height: "50px",
        width: "50px",
        transform: state ? "rotate(90deg)" : "rotate(-90deg)",
        transition: "transform 0.5s ease-in-out",
    };

    const handleClick = () => {
        setState(!state);
    };

    return (
        <div className={`${menu}`}>
            <div className={`${header}`} onClick={handleClick}>
                <h4>{titre}</h4>
                <Arrow style={arrowStyle} />
            </div>
            {state ? <h5 className={`${paragraphe}`}>{texte}</h5> :" "}
        </div>
    );
};

export default MenuDeroulant;
