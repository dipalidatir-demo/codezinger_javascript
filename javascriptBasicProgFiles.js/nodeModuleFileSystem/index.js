const fs = require("fs"); // this type is synchronous that's why need to write synch with file
                          //here code is in index.js file and o/p is in read.txtfile
//fs.writeFileSync("read.txt","hello hiiiii"); // create file read.txt
                                            // and hello hiii is data as o/p which show in read.txt file

 fs.appendFileSync("nodeModuleFileSystem/read.txt","good Mrng"); // Update data in read.txt  
      
// const data = fs.readFileSync("read.txt");// read data of read.txt file but when read data this data shown in ascii value
                                        // so for normal data use "utf-8" 
//  console.log(data);

// const data = fs.readFileSync("read.txt","utf-8");// so for normal data use "utf-8"
// console.log(data);  //console.log in imp

fs.renameSync("nodeModuleFileSystem/read.txt","dipali.txt"); //rename for 

// fs.unlinkSync("dipali.txt"); //delete file





//**asych - no need to write asych in api */*********************************** */

//fs.writeFile("read.txt","hello", (err) => {  // in async need callback function which is (err) here
//     if (err) throw err;
//     console.log("createFile");

// });