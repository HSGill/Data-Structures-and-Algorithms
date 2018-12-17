const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    for (let i=0;i<array.length-1;i++){
        let smallestNumber = array[i];
        for (j=i+1;j<array.length-1;j++){
            if(array[j]<smallestNumber){
                let k = smallestNumber;
                array[j]=smallestNumber;
                array[j]=k;

            }
        }
    }
  
}

selectionSort(numbers);
console.log(numbers);