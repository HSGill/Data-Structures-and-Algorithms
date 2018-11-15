function SelectionSort (A) {
for (let i = 0; i <= A.length - 1; i++) {
    let smallestNum = i;
    for (var j = i+1; j <= A.length - 1; j++) {
        if (A[smallestNum] > A[j]) {
            smallestNum = j;
        }
    }
    var temp = A[i];
    A[i] = A[smallestNum];
    A[smallestNum] = temp;
}
return A;
}
