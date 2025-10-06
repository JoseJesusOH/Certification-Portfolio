

function Persona(nombre,apellido,email){
this.nombre=nombre;
this.apellido=apellido;
this.email=email;
this.nombreCompleto=function(){
    return this.nombre+" "+this.apellido
}
}
let padre = new Persona(
    "Juan", "Perez", "juan@gmail.com"
)
console.log(padre)

let madre = new Persona(
    "Julia", "Hernandez", "julia@gmail.com"
)
console.log(madre)