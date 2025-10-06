
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
    nombreCompleto(){
      return this.nombre+" "+this.apellido
    }

    toString(){
            return this,this.nombreCompleto();
    }

}

class Empleado extends Persona{
 constructor(nombre,apellido,departamento){
    super(nombre,apellido)
this._departamento=departamento
 }
 get departamento(){
    return this._departamento;
 }
 set departamento(departamento){
    this._departamento=departamento
 }
 nombreCompleto(){
   return super.nombreCompleto()+" "+this._departamento
 }
}


let persona1=new Persona("Juan","Barrera");
console.log(persona1)

let empleado1=new Persona("Maria","Dominguez","Sistemas")
console.log(empleado1)
console.log(empleado1.nombreCompleto())


console.log(empleado1.toString())
