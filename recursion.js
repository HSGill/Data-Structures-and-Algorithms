counter =0;
function inception(){
    console.log(counter);
    if(counter >3){
        return 'done';
    }
    counter++;
    return inception()
}

inception();
// 1. Idetify the base case
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed.
//    Usually we have two returns
// the function simply gets closer and closer to the 
// base case and once its get to base case and it finally
// returns and pops functions off the stack.