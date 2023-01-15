// Given an array of integers, find the number of subarrays whose sum is odd.



// Input:

//     6

//     5 4 4 5 1 3



//     where:

// First line represents the number of elements in the array.
// Second line represents the elements in the array.


// Output:

//     12



// Explanation:  The subarrays with odd sum are:

//                         1) {5} Sum = 5 (At index 0)

//                         2) {5, 4} Sum = 9

//                         3) {5, 4, 4} Sum = 13
//                         4) {5, 4, 4, 5, 1} Sum = 19
//                         5) {4, 4, 5} Sum = 13
//                         6) {4, 4, 5, 1, 3} Sum = 17
//                         7) {4, 5} Sum = 9
//                         8) {4, 5, 1, 3} Sum = 13
//                         9) {5} Sum = 5 (At index 3)
//                         10) {5, 1, 3} Sum = 9
//                         11) {1} Sum = 1
//                         12) {3} Sum = 3, hence there are 12 of these, hence the output 12.









let arr = [5, 4, 4, 5, 1, 3]
//0 => 5,5+4,5+4+4,5+4+4+5,5+4+4+5+1,5+4+4+5+1+3   ==> 5,9,13,18,19,22
//1 => 4,4+4,4+4+5,4+4+5+1,4+4+5+1+3,4+5  ==>  4,8,13,14,17,9
//2
//3
//4
//5
//6

let n = arr.length
//where arr.length => 6

function sumOfodd(arr, n) {

    let result = 0

    for (let i = 0; i <= n - 1; i++) {
        let sum = 0
        for (let j = i; j <= n - 1; j++) {

            sum = sum + arr[j]
            //arr[j]=arr[0]=5
            //5+4=9
            //9+4


            if (sum % 2 != 0) {
                result++



            }


        }

    }
    return result
}
console.log(sumOfodd(arr, n))