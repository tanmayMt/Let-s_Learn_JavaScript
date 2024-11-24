console.clear();


// Asynchronous Task Execution with Callbacks
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