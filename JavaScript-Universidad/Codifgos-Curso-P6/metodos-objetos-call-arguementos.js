let persona1={
    nombre:"Juan",
    apellido:"Barrera",
    nombreCompleto: function(title,tel){
        return title+": "+this.nombre+" "+this.apellido+tel
    }
}

let persona2={
    nombre:"Jose",
    apellido:"Barrera",
}

console.log(persona1.nombreCompleto())


console.log(persona1.nombreCompleto.call(persona2,"Ing. ","6442138093"))
