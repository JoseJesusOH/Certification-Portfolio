class Persona {
  static contadorPersona = 0;
  

  constructor(idPersona,nombre, apellido,edad) {
    this._idPersona=idPersona;
    this._nombrenombre = nombre;
    this._apellido = apellido;
    this._edad=edad;
  }
  

  get idPersona() { 
    return this._idPersona;
  }
  set idPersona(idPersona) { 
    this._idPersona = idPersona;
  }
  get nombre() {
    return this._nombrenombre;
  }
  set nombre(nombre) {
    this._nombrenombre = nombre;
  }
  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }
  get edad() {
    return this._edad;
  }
  set edad(edad) {
    this._edad = edad;
  }
  nombreCompleto() {
    return `${this._idPersona} 
    ${this._nombrenombre} 
        ${this._apellido}
         ${this._edad}`;
  }
 }