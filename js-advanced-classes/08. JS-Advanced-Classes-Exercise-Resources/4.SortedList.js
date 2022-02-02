class List {
    
    constructor() {
        this.innerArr = [];
        this.size = 0;
    }
    add(el) {
        if (isNaN(el)) {
            throw new Error('Invalid element')
        }
        this.innerArr.push(el);
        this.innerArr.sort((a, b) => a-b);
        this.size++;
    }
    remove(index) {
        if (index < 0 || index >= this.innerArr.length) {
            throw new Error('Invalid index');
        }
        this.innerArr.splice(index, 1);
        this.size--;
    }
    get(index) {
        if (index < 0 || index >= this.innerArr.length) {
            throw new Error('Invalid index');
        }
        return this.innerArr[index];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1))
