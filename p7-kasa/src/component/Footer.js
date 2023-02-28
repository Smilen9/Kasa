import React from "react";
import Logo from "./Logo"; // Importation du logo
import "../style/footer.css"; // Importation du css pour le footer

const Footer = () => {
    return (
        <>
            <div className="Footer">
                { <Logo color="white" /> }

                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </>
    );
};

export default Footer;
