
//----------------------------
// Given an array of integers A, 
// Given two strings S1 & S2, search for an occurrence of the second string within a first string.  
// Note: Do not use system library for the implementation. 
// Input:
//     Code Zinger University //S1
//     Zinger //S2

//     where, 
// First line represents string S1. 
// Second line represents string S2. 

// Output:
//     5 

// Here 'Zinger' word starts at 5th index within 'Code Zinger University’. 

// Assume that, 
// The length of strings S1 & S2 are within the range [1 to 10000].
// Character comparisons will be case-sensitive.





//SOLUTION

S1= "Code Zinger University"
S2 =  "Zinger" 

let res =S1.indexOf(S2) // indexof means its find sequence of word in other line and its show only that words index value 
                          // thats why o/p is 5 bcz zinger word in s1 is in place of index 5

console.log(res)