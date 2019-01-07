
const InsertionSort = (array) =>{

    for (i=1;i<array.length;i++){
        let value = array[i];
        let key = i;
        while (value<array[key-1] && key>0 ){
         array[key] = array[key-1];
         key =key-1;
        }
        array[key] = value;
    }
}
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
InsertionSort(numbers);
console.log(numbers);