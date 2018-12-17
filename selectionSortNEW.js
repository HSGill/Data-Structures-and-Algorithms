const number = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers = [5, 4, 3, 2, 1];

function selectionSort(array) {

  for (let i = 0; i < array.length - 1; i++) {
    let min = i
    let temp = array[i];

    for (j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        min = j;
      }

    }
   array[i] = array[min];
   array[min] = temp;

  }

}

selectionSort(numbers);
console.log(numbers);