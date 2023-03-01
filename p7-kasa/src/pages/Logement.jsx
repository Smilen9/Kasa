import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import getApi from "../api/getApi";
import FicheLogement from "./FicheLogement";
import "../style/Logement.css"; //CSS

let logements = getApi();

const Logement = () => {
    let { id } = useParams(); //On stock l'id de l'url dans la variable id
    let navigate = useNavigate(); //permet de rediriger sur une page 
    useEffect(() => {
// verification si l'id est bien dans l'api sinon page erreur 404
        if (
            !logements.some((logements) => {
                return logements.id === id;
            })
        ) {
            navigate("../Error");
        }
    });

    return (
        <>
            <FicheLogement />
        </>
    );
};

export default Logement;
