class Persona{
    constructor(nombre,apellido){
 this.nombre=nombre;
 this.apellido=apellido;
    }
    get nombre(){
        return this.nombre;
    }
    set nombre(nombre){
 this.nombre=nombre;
    }
}

let persona1=new Persona("Juan","Barrera");
persona1.nombre="Jose"
console.log(persona1.nombre)
