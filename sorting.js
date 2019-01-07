const numbers = [99,44,6,1,5,63,87,283,4,0];

function bubbleSort (array){
for(let i =0;i< array.length-1;i++ ){
    for (let j=i+1;j<array.length;j++){
        if(array[i]>array[j]){
            let k = array[i];
            array[i]=array[j];
            array[j] = k;
        }
        
    }
}
}
bubbleSort(numbers);
console.log(numbers);