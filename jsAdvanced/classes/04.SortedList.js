class List {
    constructor() {
        elements = [];
        size = 0;
    }

    add(el) {
        this.elements.push(el);
        this.size++;
        this.elements = this.elements.sort((a, b) => a - b);
    }

    remove(ind) {
        if (this.size > 0 && ind >= 0 && ind < this.size) {
            this.elements.splice(ind, 1);
            this.size--;
        } else {
            throw  new Error('Invalid index or empty array!');
        }
        
    }

    get(ind) {
        if (this.size > 0 && ind >= 0 && ind < this.size) {
            return this.elements[ind];
        }else {
            throw  new Error('Invalid index or empty array!');
        }
    }
}

let list = new List();
list.add(8);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(2)); 
