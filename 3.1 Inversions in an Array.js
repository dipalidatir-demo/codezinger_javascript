// Given an array of integers, find the number of inversions in it. Inversion Count for an array indicates – how far (or close) the array is from being sorted. If an array is already sorted then inversion count is 0. If an array is sorted in reverse order that inversion count is the maximum.
// Formally speaking, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.

 

// Input:

//     5

//     2 4 1 3 5

    

//     where:

// First line represents the number of elements in the array.
// Second line represents the elements in the array.
 

// Output:

//     3

  

// Explanation: The given array { 2, 4, 1, 3, 5 } has 3 inversions ( 2, 1 ), ( 4, 1 ), ( 4, 3 ). Hence the output 3.

 

// Assumptions:

// Array can of size from 1 to 1000.
// Array element can be in the range -1000 to 1000.
 

let arr=[ 2 ,4, 1 ,3, 5]

let count=0;

for(i=0;i<arr.length;i++){

    for (j=i+1;j<arr.length;j++){
       


    if (arr[i]>arr[j]){
        count ++
    
    }
   
    }
    }
   
 console.log(count)
