/*
// Simula una operación que tarda
function tareaLenta(ms) {
  const inicio = Date.now();
  while (Date.now() - inicio < ms) {
    // espera ocupando CPU (bloqueante)
  }
  return `Tarea de ${ms}ms terminada`;
}

console.log("Inicio");

console.log(tareaLenta(1000)); // bloquea 1 segundo
console.log(tareaLenta(500));  // bloquea 0.5 segundos

console.log("Fin");
*/

/*
// Simula una operación que tarda, pero no bloquea
function tareaLentaAsync(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Tarea de ${ms}ms terminada`);
    }, ms);
  });
}

async function ejecutarTareas() {
  console.log("Inicio");

  const resultado1 = tareaLentaAsync(1000);
  const resultado2 = tareaLentaAsync(500);

  // Espera que terminen sin bloquear el hilo principal
  console.log(await resultado1);
  console.log(await resultado2);

  console.log("Fin");
}

ejecutarTareas();

*/

/*
//Sincronico
console.log("Inicio");
console.log("Tarea 1");
console.log("Tarea 2");
console.log("Fin");
*/
/*
//Asincronico
console.log("Inicio");

setTimeout(() => console.log("Tarea 1"), 1000);
setTimeout(() => console.log("Tarea 2"), 500);

console.log("Fin");

*/


async function cargarPagina() {
  console.log("Inicia carga de contenido de la página");
  setTimeout(() => console.log("Contenido de la página listo (0.5s)"), 500);

  console.log("Inicia llamada al API");
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Datos del API listos (1s)");
}

cargarPagina();
console.log("Esto se ejecuta mientras la página carga...");



/*
async function cargarDatos() {
  console.log("Inicio función async");

  // await pausa aquí dentro hasta que la promesa se resuelva
  const datos = await new Promise(resolve => setTimeout(() => resolve("Datos API"), 1000));
  console.log(datos); // se ejecuta después de 1 segundo

  console.log("Fin función async");
}

// Esta parte sigue corriendo mientras se espera el await
console.log("Código fuera de la función async");

cargarDatos();

console.log("Más código fuera de la función async");
*/

/*

// Con then
fetch("api/data")
  .then(res => res.json())
  .then(data => console.log(data));

// Con await
async function cargar() {
  const res = await fetch("api/data");
  const data = await res.json();
  console.log(data);
}


async function cargar() {
  try {
    const res = await fetch("api/data");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Error:", err);
  }
}

*/