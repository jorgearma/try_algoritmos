/* elegimos un pivote, dividimos los numeros en dos grupos los menores a un lado
los mayores al otro ,repetimos la operecion usando recursividad   */

const quickSort = (array) => {
    if (array.length <= 1) {
        return array;
    }

    const [pivote, ...resto] = array;
    const izquierda = [];
    const derecha = [];

    for (const elemento of resto) {
        elemento < pivote ? izquierda.push(elemento) : derecha.push(elemento);
    }

    return [...quickSort(izquierda), pivote, ...quickSort(derecha)];
};

const numerosAleatorios = [];

for (let i = 0; i < 10; i++) {
    let numero = Math.floor(Math.random() * 10);
    numerosAleatorios.push(numero);
}
console.log("Numeros aleatorios:", numerosAleatorios);

const numerosOrdenados = quickSort(numerosAleatorios);
console.log("Numeros ordenados:", numerosOrdenados);
    
/*
1. Selecciona un elemento pivot de la lista.
2. Divide la lista en dos subgrupos: uno con elementos menores que el pivot y otro con 
   elementos mayores que el pivot.
3. Recursivamente ordena cada subgrupo.
4. Combina los subgrupos ordenados para obtener la lista final ordenada. 
*/


