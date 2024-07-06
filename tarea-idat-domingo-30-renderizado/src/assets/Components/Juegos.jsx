import '../Components/Juegos.css';

export const Juegos = ({url,titulo ,descripcion }) => {
    return (
        <>
            <div className="juego">
                <img src={url} alt='imagen' />
                <div className="container">
                    <p className="titulo">{titulo}</p>
                    <p className="description">{descripcion}</p>
                </div>
            </div>
        </>
    )
}