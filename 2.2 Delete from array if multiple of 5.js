 //Given an array of integers, delete each element from the array which is a multiple of 5, and display the rest of the array.

 

// Input:

// 6

// 2 3 4 11 22 320



// where:

// First line represents the number of elements in the array.
// Second line represents the elements in the array.


// Output:

// 2 3 4 11 22


 let arr=[2, 3 ,4 ,11, 22, 320]
let n=arr.length

for(i=0;i<n;i++){
    if(arr[i]%5!=0){
        console.log(arr[i]);
    }
}


//2 3 4 11 22



   

    


