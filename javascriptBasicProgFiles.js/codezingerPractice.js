// ***************************1.1*************************

// Given an array of integers, write a program to display the product of array elements.

 

// Input:

//     6

//     1 2 3 4 5 6

    

//     where:

// First line represents the number of elements in the array.
// Second line represents the elements in the array.



// let a = [1,2,3,4,5,6]

// let product = 1 //take product 1 here for product

// for (i=0 ; i< a.length; i++){
//     product = product*a[i]
   
// }
// console.log(product);


//**********************1.2 ******************************************************


// 2.Given an array of N integers, find the largest gap between any two elements of the array.

// In simple words, find max(|Ai-Aj|) where 0 ≤ i < N and 0 ≤ j < N.

 

// Input:

//     4

//     3 6 7 10 

    

//     where:

// First line represents the number of elements in the array.
// Second line represents the elements in the array.
 

// Output:

//     7

 

// Explanation: Here, the largest gap can be found between 3 and 10 which is 10 - 3 = 7, hence the output 7.

 

// Assumptions:

// Array element can be in the range -1000 to 1000.

//solution

// let arr =[3,6,7,10]      **** //1st approach

// let max = Math.max(...arr);
// let min = Math.min(...arr)

// let largestGap=(max-min)

// console.log(largestGap)

//____________________________2nd approach

// let arr = [3,6,7,10]
     
   
// function difference (arr){    //to solve problem we use function here
//   // let a=0;
  

//     for (let i=0; i<arr.length; i++){  // finding max , min of array

//       var min1 = arr[0]
//       var max1 = arr[0]



//     if (arr[i] > max1)
//     max1 = arr[i] ;
//     if (arr[i] < min1)
//     min1 = arr[i]
// }
// return (max1-min1)

// }
// difference (arr)
// console.log(difference (arr));



//  ******************** 1.3) **************

//Given an array of integers, write a program to rotate the array to the right side K times.

 

// Input:

// 10

// 10 20 30 40 50 60 70 80 90 100

// 3



// where:

// First line represents the number of elements in the array.
// Second line represents the elements in the array.
// Third line represents the value of K( Number of times to rotate the array to right side )


// Output:

// 80 90 100 10 20 30 40 50 60 70



// Explanation: Output displays the array after rotating K=3 times to the right side.


//solution -

// let arr = [10,20,30,40,50,60,70,80,90,100]

// let reverse ;
// for(i=0;i<arr.length;i++){
//     console.log(arr[i])
  
//   arr[i]=[ arr.length-1]
//   arr[i]=a[0]
// }


//*********************************delete an element */
//Given an array of integers, delete each element from the array which is a multiple of 5, and display the rest of the array.

 

// Input:

// 6

// 2 3 4 11 22 320



// where:

// First line represents the number of elements in the array.
// Second line represents the elements in the array.


// Output:

// 2 3 4 11 22


// solution =

let arr = [2,3,4,11,22,320]

function deleteEle (x){

    for(i=0;i<arr.length;i++){

        if(x%5 ==0){
            return false
        }return true
    }
}deleteEle(arr)






