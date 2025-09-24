// 1️ Optional chaining ?. y Nullish coalescing ??
const usuario = {
  nombre: 'Ana',
  direccion: { ciudad: 'CDMX' }
};

console.log('Ciudad:', usuario.direccion?.ciudad); // CDMX
console.log('Teléfono:', usuario.contacto?.telefono ?? 'Sin teléfono'); // Sin teléfono

// 2️ Destructuring y Rest/Spread
const persona = { nombre: 'Luis', edad: 30, pais: 'MX' };
const { nombre, edad } = persona;
console.log('Nombre y edad:', nombre, edad); // Luis 30

const colores = ['rojo', 'verde', 'azul'];
const [primero, segundo, ...restoColores] = colores;
console.log('Colores:', primero, segundo, restoColores); // rojo verde ['azul']

// Spread para combinar arrays
const nums1 = [1,2,3];
const nums2 = [4,5];
const combinado = [...nums1, ...nums2];
console.log('Combinado:', combinado); // [1,2,3,4,5]

// Spread en objetos
const base = {a:1, b:2};
const copia = {...base, c:3};
console.log('Copia objeto:', copia); // {a:1,b:2,c:3}

// 3️ Diferencia setTimeout vs Promise
console.log('Inicio');

setTimeout(() => console.log('setTimeout (macrotask)'), 0);

Promise.resolve().then(() => console.log('Promise (microtask)'));

console.log('Fin');

// 4️ Prototype y Herencia prototípica
function Persona(nombre) {
  this.nombre = nombre;
}
Persona.prototype.saludar = function() {
  console.log(`Hola, soy ${this.nombre}`);
};

function Estudiante(nombre, carrera) {
  Persona.call(this, nombre); // Llamar constructor de Persona
  this.carrera = carrera;
}

Estudiante.prototype = Object.create(Persona.prototype);
Estudiante.prototype.constructor = Estudiante;
Estudiante.prototype.estudiar = function() {
  console.log(`${this.nombre} estudia ${this.carrera}`);
};

const ana = new Estudiante('Ana', 'Ingeniería');
ana.saludar();  // Hola, soy Ana
ana.estudiar(); // Ana estudia Ingeniería

// 5️ Tipos de datos y coerción
console.log('1 + "2" =', 1 + '2');       // '12'
console.log('1 - "2" =', 1 - '2');       // -1
console.log('true + 1 =', true + 1);     // 2
console.log('false == 0 ?', false == 0); // true
console.log('false === 0 ?', false === 0); // false

// 6️ Ejemplo con apply / spread y arrays
const promedios = [9.5, 10.2, 8.7, 10.8];
const mejorPromedio = Math.max.apply(null, promedios); // apply
console.log('Mejor promedio (apply):', mejorPromedio);

const mejorPromedio2 = Math.max(...promedios); // spread
console.log('Mejor promedio (spread):', mejorPromedio2);

// 7️ Ejemplo de función con rest y apply
function felicitar(...alumnos) {
  return alumnos.map(a => `🎉 Felicidades ${a.nombre}, promedio ${a.promedio}`).join('\n');
}

const top3 = [
  { nombre: 'Ana', promedio: 10.5 },
  { nombre: 'Luis', promedio: 10.2 },
  { nombre: 'María', promedio: 10.1 }
];

console.log('Mensajes de felicitación:\n', felicitar.apply(null, top3));
