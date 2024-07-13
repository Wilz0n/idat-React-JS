interface Usuario {
    nombre: string;
    apellido: string;
  }
  
  interface Listado {
    usuarios: Usuario[];
  }
  
  const Listado = ({ usuarios }: Listado) => {
    return (
      <div>
        <h2>Usuarios:</h2>
        <ul>
          {usuarios.map((usuario, index) => (
            <li key={index}>{usuario.nombre} {usuario.apellido}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Listado;