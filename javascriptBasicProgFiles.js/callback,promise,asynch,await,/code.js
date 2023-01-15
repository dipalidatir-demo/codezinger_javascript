//async js programming
//callback,promises,async & await

const { callbackify } = require("util");



//_______________________ function use for display data_________
const datas =[
{name:"dipali",profession:"software developer"}, // this is object in array
{name:"nikita",profession:"software developer"}

];

function getData(){                // get data is function hum usko kahi pe bhi call krwa skte hai
                                 //setimeout is callback function agar hme koi specific time ke bad function execute krwana ho to use krte hai
    setTimeout(() => {             //  => this is arrow function
   let output="";                  // empty output
   datas.forEach((data,index) =>{
    output+= '<li>$[data.name]</li>'   // isase output milega dono ke name dipali, nikita
   })
   document.body.innerHTML= output     // for display <li>
    }, 1000);                        // 1000 this is time 1 sec iske bad function execute krwana hai
}

function createData(newdata,callback){                   //call back

    setTimeout ({} => {
        datas,push(newdata)   // push data in datas
       callback();
    },2000);
}
//getData();                        // we calling function here ye hame data dega


//______________________________function for crete data (call back____________________________

getData();
createData({name:"dipali",profession:"software developer",getDatas})



//_____________________________promise_____________