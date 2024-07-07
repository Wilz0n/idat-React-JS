# JAVASCRIPT CON REACT: Creacion basica de la plataforma de juegos steam renderizado

## Resumen Simplificado del Código en app.jsx
### Importaciones:

- Estilos CSS: Se importa un archivo CSS para aplicar estilos a la aplicación.
- Componentes: Se importa una carpeta que contiene los componentes del juego.
### Datos de Juegos:

- Archivo JSON: Se importa un archivo llamado game.json que contiene datos sobre los juegos, como el título, la descripción y la URL de cada juego.
Creación de Componentes:

### Iteración sobre los datos:
 Se recorren los datos de los juegos (provenientes del archivo JSON) y para cada juego se crea un componente.
Propiedades Únicas: Cada componente de juego recibe propiedades específicas como la URL, el título y la descripción del juego.
### Renderizado en la Interfaz:

Mostrar Componentes: Los componentes de juegos creados dinámicamente se muestran en la interfaz de la aplicación React.
Consola del Navegador: Los datos originales de los juegos se imprimen en la consola del navegador para asegurarse de que se han cargado correctamente.

```
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
```