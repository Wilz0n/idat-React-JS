## Tarea

Crear un formulario para agregar usuarios y agregarlos dinámicamente a una tabla . Los usuarios tienen nombres, apellidos y pais, ademas cada usuario tiene un id unico para poder ser identificado. Asu ves, debera permitir eliminar usuarios en la misma tabla atravez de un boton. Para relizar este proyecto debera utilizar Vite, json-server y un JSON para almacenar la informacion de los usuarios.
 
No olvidar de crear un readme explicando el funcionamiento de su pagina y adjuntar imagenes en el mismo para una mejor visualizacion.

# Sistema de Registro de Usuarios con Vite y JSON Server / db.json

En este proyecto se puede realizar un registro de usaurio en el formulario interactivo en campos diseñados para caputrar los datos precisos los cuales son mostrados tambien de forma dinamica en una tabla dentro de la misma pagina.

![App Screenshot](/registro-de-usaurios-sabado-22/imagen1.png)

# Codigo de implementacion de JS
- En mi JavaScript facilita la interaccion entre una aplicación web y un servidor JSON (http://localhost:5173/users) permitiendo cargar,agregar y eliminar usuarios dinámicamente desde una tabla HTML (#tabla-users). Utiliza eventos y peticiones para mantener actualizada la interfaz con los datos del servidor asegurando una experiencia interactiva y fluida para gestionar registros de usuarios.

```

import './styles2.css';

document.addEventListener('DOMContentLoaded', function() {
    const tablaUsuarios = document.querySelector('#tabla-users tbody');
    const form = document.querySelector('.formulario');
  
    function cargarUsuarios() {
      fetch('http://localhost:5173/users')
        .then(response => response.json())
        .then(data => {
          tablaUsuarios.innerHTML = ''; 
  
          data.forEach(user => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
              <td>${user.id}</td>
              <td>${user.name}</td>
              <td>${user.email}</td>
              <td>${user.fechaNacimiento}</td>
              <td>
                <button class="eliminar" data-id="${user.id}">Eliminar</button>
              </td>
            `;
            tablaUsuarios.appendChild(newRow);
          });
        })
        .catch(error => console.error('Error al cargar usuarios:', error));
    }
  
    cargarUsuarios();
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const nombre = document.querySelector('#nombre').value.trim();
      const correo = document.querySelector('#correo').value.trim();
      const fechaNacimiento = document.querySelector('#fechaNacimiento').value;
  
      if (nombre === '' || correo === '' || fechaNacimiento === '') {
        console.error('Por favor completa todos los campos.');
        return;
      }
  
      const nuevoUsuario = {
        name: nombre,
        email: correo,
        fechaNacimiento: fechaNacimiento
      };
  
      fetch('http://localhost:5173/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoUsuario),
      })
      .then(response => response.json())
      .then(data => {
    
        cargarUsuarios();
      })
      .catch(error => console.error('Error al guardar usuario:', error));
  
     
      form.reset();
});
  
    // Evento delegado para eliminar un usuario
    tablaUsuarios.addEventListener('click', function(event) {
      if (event.target.classList.contains('eliminar')) {
        const userId = event.target.getAttribute('data-id');
  
        // Eliminar el usuario del servidor JSON (usar fetch con método DELETE)
        fetch(`http://localhost:5173/users/${userId}`, {
          method: 'DELETE',
        })
        .then(response => {
          if (response.ok) {
            // Si se elimina correctamente del servidor, también eliminar visualmente de la tabla
            event.target.closest('tr').remove();
          } else {
            throw new Error('Error al eliminar usuario');
          }
        })
        .catch(error => console.error('Error al eliminar usuario:', error));
      }
    });
  
  });
  ```