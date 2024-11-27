// taskOne(function t1() {
//   taskTwo(function t2() {
//     taskThree(function t3() {
//       taskFour();
//     });
//   });
// });

//To Avoid the above complex nested function calling, we can use Promise.
console.log("Welcome")
//Create A Promise
//A Promise has 3 stages 1)Panding, 2)Reslove 3)Reject
 const promise1 = new Promise((reslove,reject)=>{
    let completedPrmise = true; //false
    if(completedPrmise){
        reslove("Completed Prmise1")
    }
    else{
        reject("Not Completed Prmise1");
    }
 })

 console.log(promise1);

 //then() will called when the specfied promise has been resloved,
 //catch() will called when the specfied promise has been reject,
 promise1.then((res)=>{
    console.log(res)
 }).catch((error)=>{
    console.log(error);
 });

 console.log('End');