/*
// 1 Declaración de función (function declaration)
function sumar(a, b) {
  return a + b;
}
console.log('sumar:', sumar(2, 3)); // 5

// 2️ Expresión de función (function expression)
const restar = function(a, b) {
  return a - b;
};
console.log('restar:', restar(5, 2)); // 3

// 3 Función flecha (arrow function)
const multiplicar = (a, b) => a * b;
console.log('multiplicar:', multiplicar(3, 4)); // 12

// 4️ Método en objeto
const calculadora = {
  dividir(a, b) {
    return a / b;
  }
};
console.log('dividir:', calculadora.dividir(10, 2)); // 5

// 5 Método en clase
class Persona {
  saludar() {
    return "Hola desde la clase";
  }
}
const p = new Persona();
console.log(p.saludar()); // Hola desde la clase

*/
// 6️ Función generadora (function*)
function* contar() {
  yield 1;
  yield 2;
  yield 3;
}
for (const n of contar()) {
  console.log('generador:', n); // 1, 2, 3
}
/*
// 7️ Función asíncrona (async function)
async function saludarAsync() {
  return "Hola asíncrono";
}
saludarAsync().then(msg => console.log(msg)); // Hola asíncrono
*/
// 8️ Función asíncrona generadora (async function*)
async function* contarAsync() {
  yield 1;
  yield 2;
  yield 3;
}
(async () => {
  for await (const n of contarAsync()) {
    console.log('generador async:', n); // 1,2,3
  }
})();