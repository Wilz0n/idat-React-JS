import './Icons.css'

export const Iconos = ({ items }) => {
    return (
        <>
            <header>
                <h2>Top values for you</h2>
                <span>Try variety of benefits when using our services</span>
            </header>

            <section className='section-container'>
                {items.map((item, index) => (
                    <div key={index} className='item-container'>
                        <img className='icon' src={item.logo} alt={item.titulo} />
                        <h2 className='titulo'>{item.titulo}</h2>
                    </div>
                ))}
            </section>
        </>
    );
}