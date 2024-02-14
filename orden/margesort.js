const mergesort = (array) => {
    if (array.length <= 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergesort(left), mergesort(right));
};

const merge = (left, right) => {
    const result = [];
    let indexL = 0;
    let indexR = 0;

    while (indexL < left.length && indexR < right.length) {
        if (left[indexL] <= right[indexR]) {
            result.push(left[indexL]);
            indexL++;
        } else {
            result.push(right[indexR]);
            indexR++;
        }
    }
    return [...result, ...left.slice(indexL), ...right.slice(indexR)];
};
let numerosaleatorios = []
for (let i = 0; i < 10; i++) {
    const element = Math.floor(Math.random()*10)
    numerosaleatorios.push(element)
}
console.log(numerosaleatorios);

const resultMerge = mergesort(numerosaleatorios)

const sacarElMayor = (array) =>{
    let mayor = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i]
        }
    }
    return mayor
}

const elMayorEs = sacarElMayor(resultMerge)
console.log('el numero mas grande es =>',elMayorEs);
console.log('resultado mergeSort ==>', resultMerge);