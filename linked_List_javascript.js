class Node {
    constructor(value){
     this.value =value;
     this.next = null;
    }
  }
  class LinkedList {
      constructor(value){
          this.head = {
              value : value,
              next:null
          }
          this.tail = this.head;;
          this.length = 1;
      }
      append(value){
          let newNode = new Node(value);
           this.tail.next = newNode;
           this.tail = newNode;
          this.length++;
      }
      prepend(value) {
        let newNode  = new Node(value);
       
        
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
      }
  
       printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
          array.push(currentNode.value)
          currentNode = currentNode.next
      }
      return array;
    }
       insert(index, value){
         let newNode = new Node(value);
         let previousNode = this.traverseIndex(index-1);
         let afterNode = previousNode.next;
       previousNode.next = newNode;
       newNode.next = afterNode;
      this.length++;
      return this.printList();
    }
        traverseIndex(index){
          let counter =0;
          let currentNode = this.head;
          while(counter!==index){
             currentNode = currentNode.next;
             counter++;
  
          }
          return currentNode;
        
    }
  }
  const linkedList = new LinkedList(3);
  linkedList.append(25);
  linkedList.append(23);
  linkedList.append(266);
  linkedList.prepend(2);
  linkedList.insert(2,100);
  linkedList.printList();
  //linkedList.traverseIndex(2);
  //console.log(linkedList);