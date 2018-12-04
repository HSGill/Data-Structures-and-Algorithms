
class Node {
    constructor(value){
        this.value = value,
        this.previous = null,
        this.next = null;
    }
}
class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            previous:null,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
       const newNode = new Node(value);
       newNode.previous = this.tail;

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node(value);
        this.head.previous =newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode!==null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(index,value){
        const newNode = new Node(value);
        let pre = this.head;
        for (let i=0;i<index-1;i++){
            pre = pre.next;
        }
        const follower =pre.next ;
         pre.next = newNode;
         newNode.next = follower;
         newNode.previous = pre;
         follower.previous = newNode;
         this.length++
         return this.printList();
 }

 remove(index){
     let currentNode = this.head;
          for (let i=0;i<index-1;i++){
              currentNode= currentNode.next;
          }
          const unwantedNode = currentNode.next;
          currentNode.next = unwantedNode.next;
          this.length--;
          return this.printList();
}
   
    
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.insert(1,23);

