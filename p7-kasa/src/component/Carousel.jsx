import { useState } from "react"; // Stocker et mettre a jour les données d'un composant
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
//Emplacement des nombre sur photo
    const slideNumber = {
        position: "absolute",
        color: "white",
        bottom: "10px",
        margin: "auto",
        width: "100%",
        textAlign: "center",
        opacity: slides.length <= 1 ? "0" : "1",
    };

    //Si 1 photo ou moins, fleche opacité 0
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
    //Image suivante
    const [currentIndex, setCurrentIndex] = useState(0); // useState prend un variable d'état et une fonction de MaJ
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0; //Verifie si l'image actuelle est la 1.
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1; //Si l'image actuelle est 1 alors la précédente est la derniere
        setCurrentIndex(newIndex);//MaJ valeur currentIndex                  //Si l'image n'est pas la premiere on recalcule l'index en enlever 1 a l'image en cour          
    };
    //Image precedente
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;//
        const newIndex = isLastSlide ? 0 : currentIndex + 1; // 
        setCurrentIndex(newIndex);
    };

    const slideStylesWidthBackground = {
        ...slideStyles,//On copie toutes les props de l'objet 
        backgroundImage: `url(${slides[currentIndex]})`, // affichage de l'image
    };                                              //Utilisation de l'url de l'image dans le tableau slides à la valeur currentIndex

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
