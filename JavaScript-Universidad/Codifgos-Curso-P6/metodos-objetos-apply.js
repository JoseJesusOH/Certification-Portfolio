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

console.log(persona1.nombreCompleto("Lic","6442132021"))


let arreglo=["Ing.","6442138092"]
console.log(persona1.nombreCompleto.apply(persona2,arreglo))
