// 10-->5-->16

// let myLinkedList = {
//     head: {
//         value: 10, // any value  
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }   //pointer to next node
//     }
// }
class Node {
    constructor(value){
        this.value = value,
        this.next = null;
    }
}
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
       const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node(value);
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
        for (let i=0;i<index;i++){
            pre = pre.next;
        }
        const holdingPointer =pre.next ;
         pre.next = newNode;
         newNode.next = holdingPointer;
         this.length++
         return this.printList();
 }
   
    
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.insert(1,23);

console.log(myLinkedList);