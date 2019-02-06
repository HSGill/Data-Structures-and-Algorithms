class Array {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }
    push(item) {
        this.data[this.length-1] = item;
        this.length++;
        return this.length;
    }
}

const array = new Array();
array.push(2);array.push(2);
console.log(array);
