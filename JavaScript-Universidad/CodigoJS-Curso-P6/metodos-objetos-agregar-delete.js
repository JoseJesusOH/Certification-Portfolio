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

persona.tel="21212"
persona.tel="1212212"

console.log(persona)

delete persona.tel;

console.log(persona)