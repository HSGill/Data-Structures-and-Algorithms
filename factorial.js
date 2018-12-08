// Write two functions that finds the factorial 
// of any number. One should use recursive, 
// the other should just use a for loop
    function findFactorialRecursive(number) {
        //code here
      if (number===2){
          return 2;
      }

        return number*findFactorialRecursive(number-1);
    }
findFactorialRecursive(5);


function findFactorialIterative(number) {
    let counter = number - 1
    while (counter > 0) {
        number *= counter;
        counter--;
    }
    return number;
}
findFactorialRecursive(5);  