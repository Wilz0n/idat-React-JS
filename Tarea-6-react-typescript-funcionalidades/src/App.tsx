import { useState } from 'react';
import './App.css';
import UserForm from './components/Usuarios';
import UserList from './components/Listado';

interface Usuario {
  nombre: string;
  apellido: string;
}

function App() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const agregarUsuario = (usuario: Usuario) => {
    setUsuarios([...usuarios, usuario]);
  };

  return (
    <div className="App">
      <UserForm onAddUser={agregarUsuario} />
      <UserList usuarios={usuarios} />
    </div>
  );
}

export default App;