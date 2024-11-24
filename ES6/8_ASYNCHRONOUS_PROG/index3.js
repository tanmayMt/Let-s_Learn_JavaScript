console.clear();
// Example of Asynchronous js

// setTimeout() is an asynchronous function
// tasks will be added in call stack, when one task is done then it will moved to the next one (LIFO)
// setTimeout() will move the task into web APIs where the task will be running in background
// other task will continue in call stack
// when the call stack is completely empty then task (callback functions) from web APIs will be moved to task queue (FIFO)
// when the entire call stack is empty then from task queue task will moved to call stack and the process is done

console.log("--Example of Aynchronous Programming--");
const taskOne = (callback) => {
  console.log(`Task One`);
  callback();
};


const taskTwo = (callback) => {   //  Asynchronous
  setTimeout(()=>{
    console.log(`Task Two`);
    callback();
  }, 2000);
  
};

const taskThree = () => {
  console.log(`Task Three`);
};
const taskFour = () => {
  console.log(`Task Four`);
};


// taskOne(function f1(){
//     taskTwo(function f2(){
//         taskThree()
//     });
// });

taskOne(()=>{
    taskTwo(()=>{
        taskThree()
    });
});