class Node {
    constructor(value){
        this.value=value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;

    }
    Insert(value) {
        const newNode = new Node(value);
        if(this.root===null){
            this.root = newNode;
        }
        else{
                  let currentNode = this.root;
                  while (currentNode){
            if(value<currentNode.value){
                if(currentNode.left){
                    currentNode = currentNode.left;
                }
                else{
                    currentNode.left = newNode;
                    return this;
                }
            }
            else if(value>currentNode.value){
                if(currentNode.right){
                    currentNode = currentNode.right;
                }
                else {
                    currentNode.right = newNode;
                    return this;

                }
            }
        }

        }
        
        
    }
     lookup(value){
    if(this.root===null){
      return false;
    }
    
      let currentNode = this.root;
      while(currentNode){
        if(currentNode.value==value){
          return currentNode;
        }
        else if(currentNode.value>value){
          currentNode = currentNode.left;
        }
        else {
          currentNode = currentNode.right;
        }
      }
      return false;
    
  }
  BreadthFirstSearch(){
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);
    while(queue.length > 0){
      currentNode = queue.shift();
      list.push(currentNode.value);
      if(currentNode.left){
        queue.push(currentNode.left)
      }
      if(currentNode.right){
        queue.push(currentNode.right)
      }
    }
    return list;
  }
  DFSInOrder (){
    let
  }
}

  
  //     9
  //  4     20
  //1  6  15  170
  

const tree = new BST();
console.log(tree.Insert(4));
console.log(tree.Insert(6));
console.log(tree.lookup(5));
