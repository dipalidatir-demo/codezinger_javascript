let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

arr= arr.filter(x=>{  //arrow function used here not used index value  only use x value 

for(j=2; j<arr.length ; j++){ // here we take j=2 for all loop
    
    if(x==1){   //for not print 1
        return false
    }
    if( x%2 == 0){   //2%2 == 0 then false
        return false

    }
    return true  //2%2 !==0 then true

}
})

 console.log(arr);