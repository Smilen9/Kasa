import { useState } from "react";
import Arrow from "./Arrow";

const slideStyles = {
    maxWidth: "100%",
    height: "415px",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
};

const sliderStyles = {
    position: "relative",
};

const Carousel = ({ slides }) => {

    const slideNumber = {
        position: "absolute",
        color: "white",
        bottom: "10px",
        margin: "auto",
        width: "100%",
        textAlign: "center",
        opacity: slides.length <= 1 ? "0" : "1",
    };
//Fleche de gauche/ image precedente
    const arrowprev = {
        left: "0px",
        zindex: "2",
        transform: "rotateZ(180deg)",
        top: "150px",
        opacity: slides.length <= 1 ? "0" : "1",
        height: "130px",
        width: "130px",
        position: "absolute",
    };

//Fleche de droite / image suivante
    const arrownext = {
        opacity: slides.length <= 1 ? "0" : "1",
        zindex: "2",
        right: "0px",
        top: "150px",
        height: "130px",
        width: "130px",
        position: "absolute",
    };

    //diapositive 
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0; //currentIndex 0 par defaut
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1; // On décrémente de 1 si on clique sur precedent
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1; // On incrémente de 1 si on clique sur suivant
        setCurrentIndex(newIndex);
    };

    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex]})`, // affichage de l'image
    };

    //
    return (                                
        <div style={sliderStyles}>
            <div>
                <div onClick={goToPrevious}>       
                    <Arrow style={arrowprev} />
                </div>
                <div onClick={goToNext}>
                    <Arrow style={arrownext} />
                </div>
            </div>
            <div style={slideNumber}>
                {currentIndex + 1} / {slides.length}
            </div>
            <div
                className="img__height"
                style={slideStylesWidthBackground}
            ></div>
        </div>
    );
};

export default Carousel;
