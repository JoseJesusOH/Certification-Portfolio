let x=10;
console.log(x.length)

let persona={
    nombre:"Jose",
    apellido:"Orozco",
    email:"jose@gmail.com",
    edad:30,
    nombreCompleto: function(){
        return this.nombre+" "+this.apellido
    }
}

console.log(persona.nombre)
console.log(persona['edad'])

for(nombrePropiedad in persona){
console.log(nombrePropiedad)
console.log(persona[nombrePropiedad]);
}