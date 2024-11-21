console.clear()
// sync vs async

// example of synchronous js
// js is single threaded, synchronous programming language.
// tasks will be added in call stack, when one task is done then it will moved to the next one (LIFO)

// console.log("------------------------------------");
// console.log("Example of Synchronous programming");
// console.log(`Task 1`);
// console.log(`Task 2`);
// console.log(`Task 3`);
// console.log(`Task 4`);
// console.log("------------------------------------\n\n");

// console.log("Example of Asynchronous programming");
// console.log(`Task 1`);
// setTimeout(() => {
//   console.log(`Task 2`);
// }, 2000);
// console.log(`Task 3`);
// console.log(`Task 4`);




// Example of Synchronous js

// Javascript is single threaded, synchronous programming language.
// tasks will be added in call stack, when one task is done then it will moved to the next one (LIFO)
console.log("--Example of Synchronous Programming--");
const task1 = () => {
  console.log(`Task 1`);
};

const task2 = () => {
    console.log(`Task 2`);
};

const task3 = () => {
  console.log(`Task 3`);
};
const task4= () => {
  console.log(`Task 4`);
};

task1();
task2();
task3();
task4();

// Example of Asynchronous js

// setTimeout() is an asynchronous function
// tasks will be added in call stack, when one task is done then it will moved to the next one (LIFO)
// setTimeout() will move the task into web APIs where the task will be running in background
// other task will continue in call stack
// when the call stack is completely empty then task (callback functions) from web APIs will be moved to task queue (FIFO)
// when the entire call stack is empty then from task queue task will moved to call stack and the process is done

console.log("--Example of Aynchronous Programming--");
const taskOne = () => {
  console.log(`Task One`);
};

const dataLoading = () =>{
  console.log(`Task Two. Data Loading`);
}

const taskTwo = () => {
  setTimeout(dataLoading, 2000);
};

const taskThree = () => {
  console.log(`Task Three`);
};
const taskFour = () => {
  console.log(`Task Four`);
};

taskOne();
taskTwo();
taskThree();
taskFour();