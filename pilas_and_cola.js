class satck{
    constructor(item){      
        this.items = []
    }
    push(item){
        return this.items.push(item)
    }

    pop(){
        if (!this.isEmpty()) {
            return this.items.pop()
            
        }

    }
    peek(){
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1]
        }
    }
    isEmpty(){
        return this.items.length === 0
    }
    size(){
        if (!this.isEmpty()) {
            return this.items.length 
        }
    }
    
}

const pila = new satck();

pila.push(4)
pila.push(4)
pila.push(4)
pila.push(4)
pila.push(4)
pila.push(1)

console.log(pila.peek());
console.log('size', pila.size());
console.log('la fila esta vacia ? ', pila.isEmpty());
pila.pop()
console.log('despues de pop',pila.peek());
