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
            //reject("Task 2 is not Completed");  //If one reject is called the next task will not beexecuted
        },5000)
    })
}
const taskThree = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Task 3 is Completed");
        },500)
    })
}

// taskOne().then((res)=>console.log(res))
// .then(taskTwo).then((res)=>console.log(res))
// .then(taskThree).then((res)=>console.log(res))
// .catch((err)=>console.log(err));

// Promise.all([taskOne, taskTwo]).then((res) => console.log(res));
// Promise.all([taskOne, taskTwo]).then(([res1,res2]) =>{
//     console.log(res1.name);
//     console.log(res2);
// }
// );


Promise.race([taskTwo, taskThree]).then((result) =>
  console.log(result)
);

console.log("ending the program");
