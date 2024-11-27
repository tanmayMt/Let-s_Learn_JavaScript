//Promise Chaining

console.log("starting the program");

const taskOne = () =>{
    return new Promise((resolve, reject)=>{
        resolve("Task 1 is Completed");
    })
}
const taskTwo = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Task 2 is Completed");
        },3000)
    })
}
const taskThree = () =>{
    return new Promise((resolve, reject)=>{
        resolve("Task 3 is Completed");
    })
}

taskOne().then((res)=>console.log(res))
.then(taskTwo).then((res)=>console.log(res))
.then(taskThree).then((res)=>console.log(res));

console.log("ending the program");
