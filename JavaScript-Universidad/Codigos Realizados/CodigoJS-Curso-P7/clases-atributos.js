class Persona {
  static contadorPersona = 0;
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.idPersona=++Persona.contadorPersona;
  }
  get nombre() {
    return this.nombre;
  }
  set nombre(nombre) {
    this.nombre = nombre;
  }
  nombreCompleto() {
    return this.nombre + " " + this.apellido;
  }

  toString() {
    return this.idPersona+"; "+this, this.nombreCompleto();
  }
  static saludar() {
    console.log("Saludos Static");
  }

  static saludar2(persona) {
    console.log(persona.nombre);
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido);
    this._departamento = departamento;
  }
  get departamento() {
    return this._departamento;
  }
  set departamento(departamento) {
    this._departamento = departamento;
  }
  nombreCompleto() {
    return super.nombreCompleto() + " " + this._departamento;
  }
}

let persona1 = new Persona("Juan", "Barrera");
console.log(persona1.toString())

let empleado1 = new Empleado("Tony", "Barrera","Sistemas");
console.log(empleado1.toString())

console.log(Persona.contadorPersona)
let persona2 = new Persona("Monse", "Orozco");
console.log(persona2.toString())

console.log(Persona.contadorPersona)