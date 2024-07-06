import './Carusel.css';

export const Carousel = ({ message, paragraph }) => {
    return (
        <section>
            <img className="XP" src="https://images3.alphacoders.com/135/1354129.jpeg"></img>
            <h1>{message}</h1>
            <p>{paragraph}</p>
        </section>
    );
};