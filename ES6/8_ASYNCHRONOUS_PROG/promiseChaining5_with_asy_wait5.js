// promise, promise chaining, async await

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
           // reject("Task 2 is not Completed");  //If one reject is called the next task will not beexecuted
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

const callAllTasks = async () => {
  try {
    const t1 = await taskOne();
    console.log(t1);
    const t2 = await taskTwo();
    console.log(t2);
    const t3 = await taskThree();
    console.log(t3);
  }
   catch (e) {
    console.log(e);
  }
};

callAllTasks();

console.log("ending the program");
