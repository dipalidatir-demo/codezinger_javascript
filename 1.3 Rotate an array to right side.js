// Given an array of integers, write a program to rotate the array to the right side K times.
// Input:
//     10
//     10 20 30 40 50 60 70 80 90 100
//     3

//     where:

// First line represents the number of elements in the array.
// Second line represents the elements in the array.
// Third line represents the value of K( Number of times to rotate the array to right side )

// Output:
// 80 90 100 10 20 30 40 50 60 70

// Explanation: Output displays the array after rotating K=3 times to the right side.


//*******************************1st approach */
// let arr = [1, 2, 3, 4, 5, 6]
// for (i = 0; i < 3; i++) {
//     let result1 = arr.pop()

//     arr.unshift(result1)
// }
// console.log(arr)

//****************************2nd approach */

let arr = [1, 2, 3, 4, 5, 6]

function reverseAnArray (arr,d){

    for (i=0;i<d;i++){

        let first = arr[0]
        for (j=0;j<arr.length;j++){

            arr[j] = arr[j+1]
        }

        arr[arr.length-1] = first
    }for (k=0;k<arr.length;k++){

        console.log(arr[k])
    }

} reverseAnArray(arr,3)