/*
async function ejemplo() {
    console.log("Ejemplo")
      return 42;
    }
const resultado =await ejemplo();
console.log(resultado); 
*/

/* 
// 1️ Crear promesas
const promesaExito = new Promise((resolve, reject) => {
  setTimeout(() => resolve(" Promesa cumplida"), 1000);
});

const promesaError = new Promise((resolve, reject) => {
  setTimeout(() => reject(" Promesa rechazada"), 1500);
});

// 2️ Consumo con .then() y .catch()
promesaExito
  .then(resultado => {
    console.log("Then:", resultado);
    return "Paso siguiente";
  })
  .then(console.log)
  .catch(console.error);

//  Consumo con async/await y try/catch
async function ejemploAsync() {
  try {
    const resultado = await promesaExito;
    console.log("Await:", resultado);

    // Simulamos otra promesa que falla
    const resultado2 = await promesaError;
    console.log(resultado2); // no se ejecuta
  } catch (error) {
    console.error("Error capturado con await:", error);
  }
}
ejemploAsync();


// 4️ Encadenamiento de promesas
new Promise(resolve => resolve(2))
  .then(n => n * 2)
  .then(n => n + 3)
  .then(console.log); // 7


// 5️ Promise.all
const prom1 = new Promise(res => setTimeout(() => res("P1 listo"), 500));
const prom2 = new Promise(res => setTimeout(() => res("P2 listo"), 1000));

Promise.all([prom1, prom2])
  .then(results => console.log("Promise.all:", results))
  .catch(err => console.error(err));

const prom11 = new Promise(res => setTimeout(() => res("P1 listo"), 500));
const prom12 = new Promise(res => setTimeout(() => res("P2 listo"), 1000));

  // 6️ Promise.race
Promise.race([prom11, prom12])
  .then(result => console.log("Promise.race:", result))
  .catch(err => console.error(err));

// 7️ Promise.allSettled
const prom3 = Promise.resolve("Exito");
const prom4 = Promise.reject("Falló");

Promise.allSettled([prom3, prom4])
  .then(results => console.log("Promise.allSettled:", results));
const prom14 = Promise.reject("Falló");
const prom22 = new Promise(res => setTimeout(() => res("P2 listo"), 1000));

// 8️ Promise.any
Promise.any([prom14, prom22])
  .then(result => console.log("Promise.any:", result))
  .catch(err => console.error(err));

// 9️ Promesas con flujo de datos (simulación de API)
function apiUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) resolve({ id, nombre: `Usuario${id}` });
      else reject("ID inválido");
    }, 500);
  });
}

async function cargarUsuario(id) {
  try {
    const usuario = await apiUsuario(id);
    console.log("Usuario cargado:", usuario);
  } catch (e) {
    console.error("Error cargando usuario:", e);
  }
}

cargarUsuario(1);
cargarUsuario(-1);
*/

// 10️ Encadenando múltiples await
function apiUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) resolve({ id, nombre: `Usuario${id}` });
      else reject("ID inválido");
    }, 500);
  });
}

async function flujoCompleto() {
  const user = await apiUsuario(2);
  console.log("Usuario:", user);

  const pedidos = await new Promise(res =>
    setTimeout(() => res(["Pedido1", "Pedido2"]), 700)
  );
  console.log("Pedidos:", pedidos);

  const pagos = await new Promise(res =>
    setTimeout(() => res({ total: 120 }), 300)
  );
  console.log("Pagos:", pagos);

  console.log("Flujo completo finalizado");
}

flujoCompleto();