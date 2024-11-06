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




//Display "user registration successful" <- this messege for 1 second by clicking save button
const saveButton = document.querySelector(".save-btn");
const message1 = document.querySelector(".message1");

saveButton.addEventListener("click", saveUser);
function saveUser() {
  message1.textContent = "user registration successful";

  setTimeout(() => {
    message1.textContent = "";
  }, 2000);
}



//Click button for counting
const startCountingButton=document.querySelector(".start-counting-btn");
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



//Dynamic Clock
const sartClockButton=document.querySelector(".start-clock-btn");
const message3 = document.querySelector(".message3");

sartClockButton.addEventListener("click", startClock);
function startClock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  minutes = formatTime(minutes);
  seconds = formatTime(seconds);

  let time = hours + ":" + minutes + ":" + seconds;

  message3.textContent = time;

  setInterval(startClock, 1000);
}

function formatTime(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}