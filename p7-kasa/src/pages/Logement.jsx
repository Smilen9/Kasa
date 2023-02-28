import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import getApi from "../api/getApi";
import FicheLogement from "./FicheLogement";
import "../style/Logement.css"; //CSS

let logements = getApi();

const Logement = () => {
    let { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
// verification si l'id est bien dans l'api sinon 404
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
