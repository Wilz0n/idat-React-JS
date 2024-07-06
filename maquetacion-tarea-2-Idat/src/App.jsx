import { Botones } from "./components/Botones/Botones";
import { Card } from "./components/Card/Card";
import { Carusel } from "./components/Carusel/Carusel";
import { Iconos } from "./components/Icons/Icons";
import { Navbar } from "./components/Navbar/Navbar";

const items = [
  { logo: "https://micras.org/wiki/images/8/81/Airport_icon.png", titulo: "Airport pickup"},
  { logo: "https://static-00.iconduck.com/assets.00/camera-icon-1024x832-h0gkd0hw.png", titulo: "Easy booking"},
  { logo: "https://i.pinimg.com/736x/47/c4/65/47c465c4b423a2c37c05d095798c94fc.jpg", titulo: "Best tour guide"},
  { logo: "https://i.pinimg.com/736x/cd/f6/cc/cdf6cc86f61041b3afdcdfeaf91cb490.jpg", titulo: "Lots of promos"}
];


export const App = () => {
  return (
    <>
      <Navbar />
      <Carusel message="Explore the sights of the Azores" paragraph="A place where nature and adventure unite" />
      <Botones />
      <Iconos items={items} />
      <Card />
    </>
  );
}