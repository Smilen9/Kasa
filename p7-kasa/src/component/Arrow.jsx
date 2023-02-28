// Composant de la fleche

const Arrow = ({ width, height, style }) => {  //Les props attendues
    return (
        <svg
            width={width}
            height={height}
            viewBox="-50 20 180 50"
            fill="none"
            style={style}
        >
            <path
            //Tracage pour dessiner la fleche
                d="M25.96 81.3458L33.04 88.4258L72.64 48.8258L33.04 9.22583L25.96 16.3058L58.48 48.8258L25.96 81.3458Z"
                fill="white"
            />
        </svg>
    );
};

//Exportation pour rendre le composant disponible
export default Arrow;
