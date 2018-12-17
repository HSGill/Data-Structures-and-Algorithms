const numbers = [99, 44];

function insertionSort(array) {
  for ( let i=0;i<array.length-1;i++){
      let temp = array[i];
      for (j=i+1;j>=1;j--){
          if(temp>array[j]){
              array[i] = array[j];
             array[j] = temp;
          }
          

      }
      temp = array[j];

  }
}

insertionSort(numbers);
console.log(numbers);