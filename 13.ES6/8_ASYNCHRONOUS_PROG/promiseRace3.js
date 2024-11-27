
console.log("Welcome")
//Create promise1
 const promise1 = new Promise((reslove,reject)=>{
    setTimeout(()=>{
        reslove("Completed Prmise1");
    },2000)
 })

 //Create promise2
 const promise2 = new Promise((reslove,reject)=>{
    setTimeout(()=>{
        reslove("Completed Prmise2");
    },1000)
 })


//Call Promises.race
//Promises.race() will return a single promise which is reslove first.
Promise.race([promise1,promise2]).then((res)=>{
    console.log(res);
})

console.log('End'); 