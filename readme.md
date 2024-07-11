import axios from 'axios';
import { useEffect, useState } from 'react';
import { Loader } from './components/Loader';
 
export const App = () => {
  const [tasks, setTasks] = useState([]);
 
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
 
  const [error, setError] = useState(false);
 
  const [loader, setLoader] = useState(false);
 
  const createTask = async () => {
    // console.log('Task', { name, author, date });
 
    const request = { name, author, date };
 
    try {
      const data = await axios.post('http://localhost:3000/tasks', request);
      setTasks([...tasks, data.data]);
      console.log(tasks);
    } catch (error) {
      console.log(error);
    }
  };
 
  // console.log(tasks);
 
  const readTask = async () => {
    setLoader(true);
 
    try {
      const data = await axios.get('http://localhost:3000/tasks');
      setTasks(data.data);
      console.log(tasks);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoader(false);
    }
  };
 
  useEffect(() => {
    readTask();
  }, []);
 
  return (
    <section>
      <header>
        <h1>Task App Component</h1>
      </header>
 
      {error && <p style={{ color: 'red', fontWeight: 'bold', fontSize: '30px' }}>Un error en el servidor</p>}
 
      {loader && <Loader />}
      <section>
        <div>
          <h2>Ingrese campos</h2>
        </div>
        <div>
          <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Nombre" />
        </div>
        <div>
          <input onChange={(e) => setAuthor(e.target.value)} type="text" placeholder="Author" />
        </div>
 
        <div>
          <input onChange={(e) => setDate(e.target.value)} type="date" />
        </div>
 
        <div>
          <button type="button" onClick={createTask}>
            Agregar Task
          </button>
        </div>
      </section>
 
      <section>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.name} - {task.author}
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};


export const Loader = () => {
  return (
    <section>
      <div
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          background: 'red',
          opacity: '0.3',
          top: '0',
        }}
      ></div>
      <h1 style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loader.....</h1>
    </section>
  );
};


1. Ultima tarea componetizar el APP que sean mas
2. Implementar el Delete
3. Cuando se agrega el task eliminar los campos
4. Agregar error en el post
