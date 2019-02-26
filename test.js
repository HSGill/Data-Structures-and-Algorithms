/* let sum = (num1,num2) =>{
    let sum = num1+num2;
    if(sum>20){
        return console.log('Hi');

    }
    else {return console.log("nothing")}
}

sum(10, 5); */

let findNumber = (array, number) => {
  for (i=0;i<array.length;i++){
      if(array[i]===number){
         return 'YES';
      }
  }
  return 'NO';
}

findNumber([1,2,3,4,5], 5);