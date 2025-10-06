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
console.log(persona.edad)
console.log(persona.nombreCompleto())

let persona2=new Object()
persona2.nombre="Hola"
persona2.edad=23

console.log(persona2.nombre)
console.log(persona2.edad)





console.log(persona)