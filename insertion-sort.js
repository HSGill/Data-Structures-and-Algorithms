
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
