import { useState } from 'react';

const Counter = () => {
  const [valueCounter, setValueCounter] = useState(20);

  const handleIncrement = () => {
    setValueCounter(prevValue => prevValue + 1);
};

  const handleDecrement = () => {
    if (valueCounter > 0) {
      setValueCounter(prevValue => prevValue - 1);
    }
};

  const handleReset = () => {
    setValueCounter(20);
};

  return (
    <section>
      <header>
        <h1>Counter Component - {valueCounter}</h1>
      </header>

      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement} disabled={valueCounter <= 0}>
        Decrementar
      </button>
      <button onClick={handleReset}>Resetear</button>

      {valueCounter > 10 ? <p>Valor mayor a 10</p> : <p>Es menor o igual a 10</p>}
    </section>
  );
};

export default Counter;