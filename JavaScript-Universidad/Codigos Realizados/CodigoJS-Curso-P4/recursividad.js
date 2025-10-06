function funcionRecursiva(numero) {
  if (numero == 1) {
    console.log(numero);
  } else {
    console.log(numero);
    funcionRecursiva(numero - 1);
  }
}

funcionRecursiva(3);
