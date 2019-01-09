const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
    if (array.length === 1) {
        return array
    }
    const length = array.length;
    const mid = Math.floor(length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);
    // Split Array in into right and left
  //  console.log(leftArray);
   // console.log(rightArray);
    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
   
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex = leftIndex + 1;     
        }
        else {
            result.push(right[rightIndex]);
            rightIndex = rightIndex + 1;
        }
    }
    return result.concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}


const answer = mergeSort(numbers);
console.log(answer);