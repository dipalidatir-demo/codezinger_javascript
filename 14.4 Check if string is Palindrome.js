//Given a string S, check whether a string S is Palindrome not. 
// Display 1 if string is palindrome else 0. 

// Input
//     level 

// Output
//     1 

// Assume that, 
// The length of string S is within the range [0 to 10000]

//solution

let str = "level";
const dipali = function () {
    let reversestr = str.split("").reverse().join("")

    if (str == reversestr) {

        console.log(1);

    } else {

        console.log(0);

    }


}

dipali();