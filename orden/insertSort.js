function insertionSort(array) {
    const length = array.length;

    for (let i = 1; i < length; i++) {
        const currentValue = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > currentValue) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = currentValue;
    }

    return array;
}

const unsortedArray = [5, 2, 9, 3, 1, 6];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray);

/*
// Pasos del algoritmo de inserción:
// 1. Tomamos el segundo elemento del arreglo (índice 1) y lo
 comparamos con el primer elemento.
// 2. Si el segundo elemento es menor que el primero, los
 intercambiamos para que el arreglo esté ordenado hasta el segundo elemento.
// 3. Continuamos de esta manera, comparando el tercer elemento con el 
segundo, el cuarto con el tercero, y así sucesivamente.
// 4. En cada iteración, desplazamos los elementos mayores
 hacia la derecha para hacer espacio para el elemento actual.
// 5. Finalmente, insertamos el elemento actual en la posición 
correcta encontrada durante las comparaciones anteriores.
// 6. Repetimos estos pasos hasta que todos los elementos estén 
en su posición correcta, lo que resulta en un arreglo ordenado.
*/