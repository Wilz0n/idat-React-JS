mport { useState } from 'react';
 
export const Counter = () => {
  const [valueCounter, setValueCounter] = useState(10);
 
  const handleIncrement = () => {
    setValueCounter(valueCounter + 1);
  };
 
  const handleDecrement = () => {
    console.log('Hola desde handleDecrement');
  };
 
  console.log('Se renderizo el component');
 
  return (
    <section>
      <header>
        <h1>Counter Component - {valueCounter}</h1>
      </header>
 
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
 
      {valueCounter > 12 ? <p>Valor mayor a 12</p> : <p>Es menor a 12</p>}
    </section>
  );
};
 
 
 
 
// USESTATE
// USEFFECT


// 1. Agregar funcionalidad de decrementar de 1 en 1
// 2. Agregar funcionalidad y UI para resetear el valor
// 3. Si el value de counter es menor o igual a 0, bloquear el boton decrementar.

/////////////////////////////

// Limpiar campos de los inputs al momento de Agregar el usuario
// Realizar iteracion de los usuarios (Pintar el nombre del usuario)
// Componentizar lo mas atomico posible los componenets