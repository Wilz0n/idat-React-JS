import './Card.css';

export const Card = () => {
    return (
    <>
    <h1 className='Choose'>Choose your tour </h1>

        <footer>
            <div className='row'>
                <article className='articulo'>
                    <img className='imagen' src='./img/mujer en campo.png'></img>
                    <h3>Alone with nature</h3>
                    <span className='person'>$100/person</span>
                    <button>→</button>
                </article>
                <article className='articulo'>
                    <img className='imagen' src='./img/montaña.png'></img>
                    <h3>Jeep ride</h3>
                    <span className='person'>$200/person</span>
                    <button>→</button>
                </article>
                <article className='articulo'>
                    <img className='imagen' src='./img/hombre en puente.png'></img>
                    <h3>Hiking tour</h3>
                    <span className='person'>$150/person</span>
                    <button>→</button>
                </article>
                <article className='articulo'>
                    <img className='imagen' src='./img/lago.png'></img>
                    <h3>Corners of the island</h3>
                    <span className='person'>$220/person</span>
                    <button>→</button>
                </article>

                <input type="submit" value="See all"></input>
            </div>

        </footer>
    </>
    )
}