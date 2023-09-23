const aletorios = []
    for (let i = 0; i < 10; i++) {
        let resultaletorio = Math.floor(Math.random()*10)
        aletorios.push(resultaletorio)        
    }
console.log(aletorios);

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

const resultinsert = insertsort(aletorios)  
console.log('result inset' , resultinsert);


const quicksort = (array) =>{
    if (array.length <= 1) {
        return array
    }
    let izquierda = []
    let derecha = []
    let pivote = array[0]

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivote) {
            izquierda.push(array[i])
        } else {
            derecha.push(array[i])
        }        
    }
    return [...quicksort(izquierda) , pivote , ...quicksort(derecha)]
}

const resultquick = quicksort(aletorios)
console.log('result quick ' , resultquick);

const mergesort = (array)=>{
    
    if (array.length <= 1) {
        return array
    }
    let medio = Math.floor(array.length / 2)
    let left = array.slice(0 , medio)
    let right = array.slice(medio)

    return merge(mergesort(left), mergesort(right))
}
const merge = ( left , right) =>{
    let indexL = 0
    let indexR = 0
    let result = []
    
    while (indexL < left.length && indexR < right.length) {
        if (left[indexL] < right[indexR]) {
            result.push(left[indexL])
            indexL++
        }else{
            result.push(right[indexR])
            indexR++
        }
    }
    return [...result, ...left.slice(indexL) , ...right.slice(indexR)]
}

const resultmerge = mergesort(aletorios)        
console.log('result merge' , resultmerge);

const busquedabinaria = (busqueda , array) =>{
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

const resultbusquedaBinaria = busquedabinaria(4, aletorios) 
console.log(resultbusquedaBinaria);


class node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class listaenlazada{
    constructor(){
        this.head = null
    }
    appent(data){
        const newNode = new node(data);
        if (!this.head) {
            this.head = newNode
        }else{
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
    }
    imprimir(){
        let current = this.head
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }
}

const lista = new listaenlazada();

lista.appent(10)
lista.appent(10)
lista.appent(10)
lista.appent(10)
lista.appent(10)
lista.appent(10)
lista.appent(10)

lista.imprimir()