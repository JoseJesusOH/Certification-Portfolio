// 1️ AJAX clásico con XMLHttpRequest (GET)
console.log('--- AJAX clásico ---');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) {
    if(xhr.status === 200) {
      const usuarios = JSON.parse(xhr.responseText);
      console.log('Usuarios obtenidos (XHR):', usuarios);
    } else {
      console.error('Error XHR:', xhr.status);
    }
  }
};
xhr.send();

// 2️ fetch con promesas (GET)
console.log('--- Fetch con promesas ---');
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) throw new Error('Error en la petición fetch');
    return response.json();
  })
  .then(usuarios => console.log('Usuarios obtenidos (fetch):', usuarios))
  .catch(error => console.error('Error fetch:', error));

// 3️ fetch con async/await (GET)
console.log('--- Fetch con async/await ---');
async function obtenerUsuarios() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if(!response.ok) throw new Error('Error en la petición async/await');
    const usuarios = await response.json();
    console.log('Usuarios obtenidos (async/await):', usuarios);
  } catch (error) {
    console.error('Error async/await:', error);
  }
}
obtenerUsuarios();

// 4️ fetch POST con async/await
console.log('--- Fetch POST ---');
const nuevoUsuario = {
  name: 'José',
  username: 'jose123',
  email: 'jose@example.com'
};

async function crearUsuario() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevoUsuario)
    });
    if(!response.ok) throw new Error('Error al crear usuario');
    const data = await response.json();
    console.log('Usuario creado:', data);
  } catch (error) {
    console.error('Error POST:', error);
  }
}
crearUsuario();

// 5️ Cancelar petición fetch con AbortController
console.log('--- Cancelar fetch ---');
const controller = new AbortController();
const signal = controller.signal;

fetch('https://jsonplaceholder.typicode.com/users', { signal })
  .then(res => res.json())
  .then(data => console.log('Fetch no cancelado:', data))
  .catch(err => console.log('Petición cancelada:', err.name));

setTimeout(() => controller.abort(), 100); // Cancela la petición después de 100ms

