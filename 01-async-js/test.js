// function sum(n){
//     let count =0;
//     for(let i = 0; i < n;i++){
//         count+=i;
//     }
//     return count;
// }
// function sumcount(){
//     console.log(sum(50));
// }
// a=setTimeout(sumcount,1001)
// //console.log(a)
// console.log(sum(50));

// const fs=require('fs');
// function countsum(n){
//     let count=0;
//     for (let i=0;i<n;i++){
//         count+=i;
//     }
//     console.log("countsum: ",count);
// }

// function countDoublesum(n){
//     let count=0;
//     for (let i=0;i<n;i++){
//         count+=i;
//     }
//     //console.log(count);
//     for (let i=0;i<n;i++){
//         count+=i;
//     }
//     console.log("countDoublesum: ",count);
// }

// fs.readFile('text.txt','utf-8',function(err, data){
//     if(err){console.log(err);}
//     else console.log(data);
// })
// setTimeout(countDoublesum,1000,5)
// setTimeout(countsum,100,5)
// console.log("hello start of the program")
// console.log("hello end of the program")


// function countsum(){
//     const p=new Promise(function(resolve){
//         setTimeout(resolve("work done"),1000);
//     });
//     return p
// }

// const value =countsum();
// value.then(function(count){
//     console.log(count)
// })

// const fs =require("fs");

// fs.readFile('text.txt','utf-8',function(err, data){
//     if(err){console.log(err)}
//     else{console.log(data)}
// })



//real power of promises

// function asyncfunction(){
//     let p=new Promise(function(resolve){
//         setTimeout(()=>{resolve("hi mohan you did it...")},2000);
//     });
//     return p;
// }

// async function main(){
//     let value=await asyncfunction();
//     console.log(value);
// }
// main();

////////////////////////////////////////////////////////////////



const fs =require("fs");


// function store(){
//     let p=new Promise(function(resolve){
//         fs.readFile('text.txt','utf-8',function(err, data){
//         if (err){console.log(err)}
//         resolve(data);       
//     })
    
//   })
//   return p
// }
// async function main(){
//     let string=await store()
//     let cleanString=string.replace(/\s+/g," ")

//     fs.writeFile('text.txt',cleanString,function(err){
//             if(err){console.log(err)}
//             else{console.log("success")}
//         })
// }
// main();

// let cleanString=string.replace('/\s/g'," ")
// console.log(cleanString)
// fs.writeFile('text.txt',constString,function(err){
//     if(err){console.log(err)}
//     else{console.log("success")}
// })


setInterval(function () {
  const currentDate = new Date();
  let hours = currentDate.getHours();
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const seconds = currentDate.getSeconds().toString().padStart(2, "0");

  // Determine whether it's AM or PM
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  ahours = hours % 12 || 12;
  console.log("-----------------");
  console.log(`${hours}:${minutes}:${seconds}`);
  console.log(`${ahours}:${minutes}:${seconds} ${ampm}`);
}, 1000);


