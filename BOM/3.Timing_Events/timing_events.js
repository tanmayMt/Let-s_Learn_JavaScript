// JS BOM
// JS Timing events  methods
// setTimeOut(), setInterval()


// setTimeout(() => {
//   console.log("hi");
// }, 3000);

//function display() {
//  console.log("display function");
//}

// setTimeout(display, 2000);
// setInterval(display, 2000);





const saveButton = document.querySelector(".save-btn");
const message1 = document.querySelector(".message1");

saveButton.addEventListener("click", saveUser);
function saveUser() {
  message1.textContent = "user registration successful";

  setTimeout(() => {
    message1.textContent = "";
  }, 2000);
}




startCountingButton=document.querySelector(".start-counting-btn");
const message2 = document.querySelector(".message2");
startCountingButton.addEventListener("click", displayCount);
function displayCount() {
  let count = 1;
  message2.textContent = count;

  setInterval(() => {
    count++;
    message2.textContent = count;
  }, 1000);
}

