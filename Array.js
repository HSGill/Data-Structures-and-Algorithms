class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    unshift(item) {
      console.log(this.data);
 for(let i = this.length; i>=0;i--){
          this.data[i] = this.data[i-1];
        }
               this.data[0] = item;
                //this.data[1] = firstItem;
        console.log(this.data);
       
        //delete this.data[this.length-1];
        this.length++;
        return this.length;
    }
    shift(){
       const firstItem =  this.data[0];
       delete this.data[0] ;
       this.length--;
       return firstItem; 
    }
}

const newArray = new MyArray();
newArray.push('Hello');
newArray.push('121');
newArray.push('213123');

newArray.unshift('unshift');
//console.log(newArray);
//newArray.shift();
console.log(newArray);