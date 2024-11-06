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
const message = document.querySelector(".message");

saveButton.addEventListener("click", saveUser);
function saveUser() {
  message.textContent = "user registration successful";

  setTimeout(() => {
    message.textContent = "";
  }, 2000);
}
