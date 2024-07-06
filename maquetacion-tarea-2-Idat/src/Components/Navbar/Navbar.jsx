import './Navbar.css';


export const Navbar = () => {
    return (
        <section>
            <img className='logo' src="https://i.pinimg.com/originals/ee/4e/c4/ee4ec4249f868f4837f74064b2f08ff0.jpg"></img>

                <nav>
                    <ul>
                        <li><a href='#'>Our tours</a></li>
                        <li><a href='#'>About us</a></li>
                        <li><a href='#'>Booking</a></li>
                        <li><a href='#'>FAQ</a></li>
                    </ul>
                </nav>

            <img className='bar' src='https://icons.veryicon.com/png/o/miscellaneous/unicons/bars-1.png'></img>
        </section>
    );
};