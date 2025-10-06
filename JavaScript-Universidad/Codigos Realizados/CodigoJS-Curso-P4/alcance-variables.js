let variableGlobal=5;
variableGlobal=10;
function mifuncion(variableLocal){
    console.log(variableLocal)
    variableGlobal=20
    //let variableGlobal=21
}
mifuncion(variableGlobal)
