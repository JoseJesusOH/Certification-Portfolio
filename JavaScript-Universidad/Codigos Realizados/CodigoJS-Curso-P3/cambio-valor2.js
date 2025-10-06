//Casmbio de valor por referencia
function cambiarValor(paramtero){
paramtero[0]=20
}
let arreglo=[10];
console.log(`Antes de funcion ${arreglo[0]}`)
cambiarValor(arreglo[0])
console.log(`Despues de funcion ${arreglo[0]}`)
