// Given an array of integers, write a program to delete the element at index K.

 

// Input:

//     5

//     10 20 30 40 50

//     1

    

//     where:

// First line represents the number of elements in the array.
// Second line represents the elements in the array.
// Third line represents the value of index K.
 

// Output:

//     10 30 40 50





let arr=[10 ,20, 30 ,40, 50]

//where k=1 ,and k is index of arr elements
let res=arr.splice(1,1)
console.log(arr);