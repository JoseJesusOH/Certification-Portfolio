let persona1={
    nombre:"Juan",
    apellido:"Barrera",
    nombreCompleto: function(){
        return this.nombre+" "+this.apellido
    }
}

let persona2={
    nombre:"Jose",
    apellido:"Barrera",
}

console.log(persona1.nombreCompleto())


console.log(persona1.nombreCompleto.call(persona2))
