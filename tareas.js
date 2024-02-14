const insertSort = (array) =>{
    for (let i = 1; i < array.length; i++) {
        const element = array[i];
        let j = i - 1

        while (j >= 0 && array[j] > element) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = element
    }
    return array
}

const aleatorios = []
for (let i  = 0; i < 10; i++) {
    const creador = Math.floor(Math.random()*10)
    aleatorios.push(creador)
}
console.log(aleatorios);

const resultInsert = insertSort(aleatorios)
console.log(resultInsert);

const busquedaBinaria = (array, numero) =>{
    let inicio = 0
    let fin = array.length - 1

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2)
        if (array[medio] === numero) {
            return medio
        }else if (array[medio] < numero) {
            inicio = medio + 1
        }else{
            fin = medio -1
        }
    }
    return -1
}

const resultbsuqeda = busquedaBinaria(aleatorios,4)
if (resultbsuqeda === -1) {
    console.log('no encontrado');
}else{
    console.log(resultbsuqeda);
}


const quickSort = (array) =>{
    if (array.length <= 0) {
        return array
    }
    const [pivote , ...resto] = array
    const left = []
    const rigth = []

    for (const iterator of resto) {
        iterator < pivote  ? left.push(iterator) : rigth.push(iterator)
    }

    return [...quickSort(left) , pivote , ...quickSort(rigth)]
}
const resultQuicSort = quickSort(aleatorios)
console.log(resultQuicSort);


const margeSort = (array) =>{
    if (array.length <= 1) {
        return array
    }
    const medio = Math.floor(array.length / 2)
    const leftt = array.slice(0,medio)
    const rigthh = array.slice(medio)

    return merge(margeSort(leftt) , margeSort(rigthh))
}

const merge = (leftt , rigthh) =>{
    const result = []
    let indexL = 0
    let indexD = 0

    while (indexL < leftt.length && indexD < rigthh.length) {
        if (leftt[indexL] < rigthh[indexD]) {
            result.push(leftt[indexL])
            indexL ++
        }else{
            result.push(rigthh[indexD])
            indexD ++
        }
    }
    return [...result , ...leftt.slice(indexL) , ...rigthh.slice(indexD)]
}

const resultmerge = margeSort(aleatorios)
console.log(resultmerge, 'merge');