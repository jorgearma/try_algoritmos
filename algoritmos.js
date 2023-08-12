const quick = (numeros) =>{
    if(numeros.length <=1){
        return numeros
    }

    let derecha = [ ]
    let izquierda = [ ]
    var pivote = numeros[0]

    for(i = 1; i < numeros.length; i++){
        if(numeros[i] < pivote){
            izquierda.push(numeros[i])
        }else{
            derecha.push(numeros[i])
        }
    }
    let listaordeanda = [...quick(izquierda) , pivote , ...quick(derecha)]
    return listaordeanda
}
const buerosdesor = [9, 3, 7, 1, 5, 8, 2, 4, 6]


console.log(quick(buerosdesor));

const busquedabini = (lista, valorbuscado) => {
    for(i =0; i < lista.length; i++ ){
        if (lista[i] === valorbuscado){
        return i

        }
    }
    return -1
}
const nombres = ["Ana", "Juan", "María", "Carlos", "Luisa", "Pedro", "Sofía", "Miguel", "Laura", "José"];
console.log(busquedabini(nombres, 'Juan'));