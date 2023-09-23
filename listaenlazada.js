aleatorios = []
    for (let i = 0; i < 10; i++) {
        const creador = Math.floor(Math.random()*10)
        aleatorios.push(creador)
    }
    console.log(aleatorios);

    var persona = {};

// Agregar propiedades al objeto
persona.nombre = "Juan";
persona.edad = 30;
persona.ciudad = "Ciudad de Ejemplo";


class node{
    constructor(data){
         this.data = data
         this.next = null
    }
 
}

class lista {
    constructor(){
        this.head = null
    }
    1(data){
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

const listaenlazada = new lista();

listaenlazada.appent(1)
listaenlazada.appent(persona)
listaenlazada.appent(2)
listaenlazada.appent(aleatorios)
listaenlazada.appent(5)
listaenlazada.appent(10)
listaenlazada.appent(6)
listaenlazada.appent(10)

listaenlazada.imprimir()