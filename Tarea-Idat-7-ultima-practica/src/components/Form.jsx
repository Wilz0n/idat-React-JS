import { useState } from 'react';

export const TaskForm = ({ createTask }) => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask({ name, author, date });
    setName('');
    setAuthor('');
    setDate('');
  };

  return (
    <section>
      <h2>Ingrese campos</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nombre" required/>
        <br></br>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text" placeholder="Author" required/>
        <br></br>
        <input value={date} onChange={(e) => setDate(e.target.value)} type="date" required/>
        <br></br>
        <button type="submit">Agregar Task</button>
      </form>
    </section>
  );
};