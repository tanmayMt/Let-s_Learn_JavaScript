
console.log("Welcome")
//Create promise1
 const promise1 = new Promise((reslove,reject)=>{
    let completedPrmise = true; //false
    if(completedPrmise){
        reslove("Completed Prmise1")
    }
    else{
        reject("Not Completed Prmise1");
    }
 })
 //Create promise1
 const promise2 = new Promise((reslove,reject)=>{
   reslove("Completed Prmise2");
 })

//Call Promise
promise1.then((res)=>{
    console.log(res)
 }).catch((error)=>{
    console.log(error);
 });

promise2.then((res)=>{
    console.log(res)
 }).catch((error)=>{
    console.log(error);
 });

 console.log('End'); 