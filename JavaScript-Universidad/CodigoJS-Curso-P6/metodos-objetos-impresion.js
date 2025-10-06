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

let personaArray=Object.values(persona)

console.log(personaArray)

let personaString=JSON.stringify(persona)

console.log(persona)