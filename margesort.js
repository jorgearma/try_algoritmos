const numerosAleatorios = []
    for (let i = 0; i < 10; i++) {
        let numero = Math.floor(Math.random()*10)
        numerosAleatorios.push(numero)        
    }
console.log(numerosAleatorios);

const mergesort = (array) =>{
    if (array.length <= 1) {
        return array
    }
    let medio = Math.floor(array.length / 2 )
    let left = array.slice(0,medio)
    let rigth = array.slice(medio)

    return merge(mergesort(left), mergesort(rigth))
}

const merge = ( left , rigth) => {
    let indexL = 0
    let indexR = 0
    let result = []

    while (indexL < left.length && indexR < rigth.length) {
        if (left[indexL] < rigth[indexR]) {
            result.push(left[indexL])
            indexL++
        }else{
            result.push(rigth[indexR])
            indexR++
        }
    }
    return [ ...result , ...left.slice(indexL) , ...rigth.slice(indexR)]
}

const resultmerge = mergesort(numerosAleatorios)
console.log(resultmerge);

const quicksort = (arr) =>{
    if (arr.length <= 1) {
        return arr
    }
    let izq = []
    let dere = []
    let pivote = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivote) {
            izq.push(arr[i])
        } else {
            dere.push(arr[i])
        }
    }
    return [...quicksort(izq) , pivote , ...quicksort(dere)]
}

const resultquick = quicksort(numerosAleatorios)
console.log(resultquick);


const insertsort = (array) => {
    for (let i = 1; i < array.length; i++) {
        const element = array[i];
        let j = i - 1
        while (j >= 0 && element < array[j]) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = element
    }
    return array
}

const resultinsertSort = insertsort(numerosAleatorios)
console.log(resultinsertSort);


const busquedaBinaria = (busqueda,array) =>{
    let inicio = 0
    let final = array.length
    while (inicio < final) {
        let medio = Math.floor((inicio + final) / 2)
        if (array[medio] === busqueda) {
            return medio
        }else if (array[medio] < busqueda) {
            inicio = medio + 1
        } else {
            final = medio - 1
        }
    }
    return -1
}

const resultbusquedabinaria = busquedaBinaria(4,numerosAleatorios)
    if (resultbusquedabinaria === -1) {
        console.log('no encotrado');
    }else{
    console.log('el elemnto esta en la posicion =>',resultbusquedabinaria);
    }


class node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
class lista1{
    constructor(){
        this.head = null
    }
    append(data){
        const newNodo = new node(data);
        if (!this.head) {
            this.head = newNodo
        }else{
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNodo
        }
    }
    print(){
        let current = this.head
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }
}

const listaenlazada = new lista1();

listaenlazada.append(10)
listaenlazada.append(10)
listaenlazada.append(10)
listaenlazada.append(10)
listaenlazada.append(10)
listaenlazada.append(10)

listaenlazada.print()