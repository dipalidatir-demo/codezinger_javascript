
// Given an array of integers A, reverse the array.
// Input 
//     5 
//     9 0 2 1 8

// Where, 

// The first line represents the size of an array. 
// The second line represents array elements separated by single space.


// Output 
//     8 1 2 0 9 


//type 1

// var arr=[9,0,2,1,8]

//  let res=arr.reverse()

//  console.log( res)

//type2

let arr = [9, 0, 2, 1, 8]

let result = []
for (let i = 0; i < arr.length; i--) {

    result.push(arr[i - 1])
}
console.log(result)


 //------------------------------------
 //reverse this array


//  let arr=[1,2,3,4,5,6,7,8,9,10]

//  let result=[]
//  for(let i=arr.length;i>0;i--){
//    result.push(arr[i-1])



// }
// console.log(result)
