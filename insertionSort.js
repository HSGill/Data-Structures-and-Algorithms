const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for ( let i=0;i<array.length;i++){
      let temp = array[i];
      for (j=i+1;j>0;j--){
          if(temp>array[j]){
              array[i] = array[j];
             array[j] = temp;
          }
      }

  }
}

insertionSort(numbers);
console.log(numbers);