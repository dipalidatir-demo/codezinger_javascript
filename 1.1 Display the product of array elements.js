// Given an array of integers, write a program to display the product of array elements.
// Input:

//     6

//     1 2 3 4 5 6

//     where:

// First line represents the number of elements in the array.
// Second line represents the elements in the array.
 

// Output:

//     720

 // Explanation: Product of elements in the array: 1*2*3*4*5*6 = 720.

 //************solution************

let dipali=[1,2,3,4,5,6]
//let i;  create a variable
let product=1
for(let i=0;i<dipali[i];i++){

    product=product*dipali[i]
    //first loop occurs
    //i=0
    //product=1*dipali[0]
    //product=1*1
    //product=1
    console.log(product)
    


    //second loop occurs
    //i=1
     //product=1*dipali[1]
    //product=1*2
    //product=2

    //third loop occurs
    //i=2
    //product=2*3=6



    //6*4=24
    //24*5=120
    //120*6=720



}
//console.log(product)
//dipali[i]= 6 (array ki length)
//let i=0(starting value-mtlb loop kaha se start hoga)
//i<dipali.length(no of loops-loop kitne baar chale ga)
//0<6 - true
//1<6 - true
//2<6 - true
//3<6 - true
//4<6 - true
//5<6 - true
//6<6 - false
//1*2*3*4*5*6
