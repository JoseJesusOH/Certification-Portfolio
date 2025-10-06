

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

let miObjeto=new Object();
let miObjeto2={}

let miCadena1=new String("Hola");
let miCadena2="Hola"

let miBoolean=new Boolean(false)
let miBoolean2=false;

let miArreglo1=new Array();
let miArreglo2=[]

let miFuncion=new Function();
let miFuncion2=function(){}
