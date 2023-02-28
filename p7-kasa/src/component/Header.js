import React from "react";
import { Link } from "react-router-dom"; // Pour les URL dynamique
import "../style/header.css"; //Import CSS
import Logo from "./Logo";

const Header = () => {
    return (
        <nav className="header">
            <Logo />
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/APropos">A Propos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
