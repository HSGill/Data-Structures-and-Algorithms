class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek(){
        //top node
return this.top;
    }
    push (value){
        //push to top of stack
        const newNode = new Node(value);
        if(this.top === null){
            this.top = newNode;
            this.bottom = newNode;
           
        } else {
            let currentNode = this.top;
            this.top = newNode;
            this.top.next = currentNode;
        }
        this.length++;
    }
    pop(){
        //pop top of stack
        if(this.top===this.bottom){
             this.bottom =null;
        }
        const currentNode  = this.top;
        this.top.next = this.top;
        this.length--;
    }
}

const myStack = new Stack();
myStack.push()