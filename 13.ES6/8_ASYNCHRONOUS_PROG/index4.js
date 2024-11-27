//How all Even lesanter work as async function
// How asynchronous operations, triggered by events, can be scheduled to execute later, 
//without interrupting the flow of the main program.
console.log("Hi");

document.querySelector("button").addEventListener("click",()=>{
    console.log("Button is click");
})

console.log("Bye");