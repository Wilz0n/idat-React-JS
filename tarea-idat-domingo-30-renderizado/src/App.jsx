import './App.css';
import { Juegos } from './assets/Components/Juegos.jsx';
import Json from './../game.json';

function App() {

  const Juego = [];

  Json.STEAM.JUEGOS.forEach(function(v){
     Juego.push(
      <Juegos
        key={v.url} 
        url={v.url}
        titulo={v.titulo}
        descripcion={v.descripcion}
      />
    );
  });

  console.log(Json.STEAM.JUEGOS);
  return (
    <>
      <nav>
        <ul>
          <li><a href="#">Tienda</a></li>
          <li><a href="#">Biblioteca</a></li>
          <li><a href="#">Comunidad</a></li>
        </ul>
      </nav>
      <div className='Steam'>
        {Juego} 
      </div>
    </>
  );
}

export default App;