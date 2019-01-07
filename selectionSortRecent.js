const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let smallestNumber = i;
        let temp = array[i];
        for (j = i + 1; j < array.length; j++) {
            if (array[smallestNumber] > array[j]) {
                smallestNumber = j;
            }
        }
        array[i]  = array [smallestNumber];
        array[smallestNumber]  = temp;

    }
    return array;
}

selectionSort(numbers);
console.log(numbers);