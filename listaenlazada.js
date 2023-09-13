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
        const newnode = new node(data);
        if (!this.head) {
            this.head = newnode
        }else{
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newnode
        }
    }
    imprimir() {
        let current = this.head
        if (current) {
            console.log(current.data);
            current = current.next
        }
    }
}

const lista = new listaenlazada();
lista.appent(10)

lista.imprimir()

