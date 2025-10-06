let cadena1="Hola"
console.log(cadena1.length)

cadena1[0]="X"
console.log(cadena1)

cadena1="Adios"
console.log(cadena1)

for(let i=0;i<cadena1.length;i++){
    console.log(`${i} -  ${cadena1[i]}`)
}