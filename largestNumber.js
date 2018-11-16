/* Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. 
For Example:: largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
returns [5,27,39,1001]
*/

function largestOfFour(arr) {
    var A = [];

    for (var i = 0; i < arr.length; i++) {
        var largestNumber = arr[i][0];
        for (var j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > largestNumber) {
                largestNumber = arr[i][j];
            }
        }
        A[i] = largestNumber;
    }
    return A;
}
 console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));


