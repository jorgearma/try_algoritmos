const margesort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }
    let medio = Math.floor(arr.length / 2)
    let left = arr.slice(0 ,medio)
    let rigth = arr.slice(medio)

    return merge(margesort(left), margesort(rigth))
}

const  merge = ( left, rigth) => {
    let indexL = 0
    let indexD = 0
    let result = []
    while (indexL < left.length && indexD < rigth.length) {
        if (left[indexL] <  rigth[indexD]) {
            result.push(left[indexL])
            indexL++
        } else {
            result.push(rigth[indexD])
            indexD++
        }
    }
    return [...result, ...left.slice(indexL), ...rigth.slice(indexD)]
}
var  numeros = []
    for (let i = 0; i < 10 ; i++) {
        var numerosaletorios = Math.floor(Math.random()*10)
        numeros.push(numerosaletorios)         
    }    
 console.log(numeros);

 const result = margesort(numeros)
 console.log(result);

 const busquedaBinaria = (busqeuda,arr)=> {
        let inicio = 0
        let fin = arr.length
        while (inicio < fin) {
            let medio = Math.floor((inicio + fin) / 2)
            if (arr[medio] === busqeuda) {
                return medio
            }else if (arr[medio] < busqeuda) {
                inicio = medio + 1
            } else {
                fin = medio - 1
            }
        }
        return -1
 }

const numeroabuscar = 7
const buscado = busquedaBinaria(numeroabuscar,result)
console.log(buscado);

