function store(){
    let p=new Promise(function(resolve){
        fs.readFile('text.txt','utf-8',function(err, data){
        if (err){console.log(err)}
        resolve(data);       
    })
    
  });
  return p
}
async function main(){
    let string=await store()
    let cleanString=string.replace(/\s+/g," ")

    fs.writeFile('text.txt',cleanString,function(err){
            if(err){console.log(err)}
            else{console.log("success")}
        })
}
main();