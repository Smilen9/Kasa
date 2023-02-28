//Creation de l'étoile de notation sur les pages logements de couleur "gris"
const Star = ({ color = "#E3E3E3", size = "30px" }) => {
    return (
        <svg
            className="star"
            width={size}
            height={size}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                fill={color}
            />
        </svg>
    );
};

export default Star;
