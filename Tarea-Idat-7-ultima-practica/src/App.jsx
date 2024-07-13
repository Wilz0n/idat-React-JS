import axios from 'axios';
import { useEffect, useState } from 'react';
import { Loader } from './components/Loader';
import { TaskForm } from './components/Form';
import { TaskList } from './components/List';

export const App = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(false);

  // Crear una nueva tarea
  const createTask = async (task) => {
    try {
      const response = await axios.post('http://localhost:3000/tasks', task);
      const newTask = response.data;
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      setError(''); 
      console.log('Nueva tarea agregada:', newTask); 
    } catch (error) {
      setError('Error al agregar la tarea'); 
      console.log(error);
    }
  };

  // Leer las tareas desde el servidor
  const readTask = async () => {
    setLoader(true);
    try {
      const response = await axios.get('http://localhost:3000/tasks');
      const tasksFromServer = response.data;
      setTasks(tasksFromServer);
      setError(''); 
    } catch (error) {
      setError('Error al cargar las tareas'); 
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  // Eliminar una tarea
  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:3000/tasks/${taskId}`);
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);
      setError(''); 
    } catch (error) {
      setError('Error al eliminar la tarea');
      console.log(error);
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

      {error && <p style={{ color: 'red', fontWeight: 'bold', fontSize: '20px' }}>{error}</p>}

      {loader && <Loader />}

      <TaskForm createTask={createTask} />

      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </section>
  );
};