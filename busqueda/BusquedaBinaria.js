const busquedaBinaria = (lista, valorBuscado) => {
    let inicio = 0;
    let fin = lista.length - 1;
  
    while (inicio <= fin) {
      let mitad = Math.floor((inicio + fin) / 2);
  
      if (lista[mitad] === valorBuscado) {
        return mitad;
      } else if (lista[mitad] < valorBuscado) {
        inicio = mitad + 1;
      } else {
        fin = mitad - 1;
      }
    }
  
    return -1;
  };
  
  const lista = [2, 4, 7, 10, 14, 18, 21];
  const valor = 10;
  
  const resultado = busquedaBinaria(lista, valor);
  if (resultado === -1) {
    console.log("El valor no se encontró en la lista.");
  } else {
    console.log(`El valor se encontró en la posición ${resultado}.`);
  }
  