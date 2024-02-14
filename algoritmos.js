
const numerosAleatorios = []

for (let i = 0; i < 10; i++) {
    const Alatorio = Math.floor(Math.random()*10)
    numerosAleatorios.push(Alatorio)
}

console.log(numerosAleatorios);


const inserSort = (array)=>{
    for (let i = 1; i < array.length; i++) {
        const element = array[i];
        let j = i - 1
        while (j >= 0 && array[j] > element) {
            array[j + 1] = array[j ]
            j--
        }
        array[j + 1] = element
    }
    return array
}
const numerosOrdenados = inserSort(numerosAleatorios)
console.log(numerosOrdenados);