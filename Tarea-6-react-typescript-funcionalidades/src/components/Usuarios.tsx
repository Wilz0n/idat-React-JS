import  { useState } from 'react';

interface Usuario {
  nombre: string;
  apellido: string;
}

interface UsuariosProps {
  onAddUser: (usuario: Usuario) => void;
}

const Usuarios = ({ onAddUser }: UsuariosProps) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  const handleAgregar = () => {
    if (nombre === '' || apellido === '') {
      alert('Por favor ingrese nombre y apellido.');
    } else {
      const nuevoUsuario: Usuario = { nombre, apellido };
      
      
      onAddUser(nuevoUsuario);

      
      setNombre('');
      setApellido('');

     
      console.log('Usuario agregado:', [nombre, apellido]);
    }
  };

  return (
    <form>
      <div>
        <label htmlFor='nombreInput'>Ingrese Nombre</label>
        <input
          id='nombreInput'
          type="text"
          placeholder='Nombre del usuario'
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <br></br>

      <div>
        <label htmlFor='apellidoInput'>Ingrese Apellido</label>
        <input
          id='apellidoInput'
          type="text"
          placeholder='Apellido del usuario'
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
      </div>

      <br></br>

      <button type='button' onClick={handleAgregar}>Agregar</button>
    </form>
  );
};

export default Usuarios;