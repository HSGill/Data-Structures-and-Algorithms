const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
    for (let i=1; i<array.length;i++){
        let temp = array[i];

        for(let j=0;j<i;j++){
            if(array[i]<array[j]){
               
                array[i]=array[j];
                array[j]=temp;
            }
        }
    }
  
}

insertionSort(numbers);
console.log(numbers);