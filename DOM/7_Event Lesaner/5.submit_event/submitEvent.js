// finding the elements
const form = document.querySelector("form");
const name1 = form.querySelector("div #name");
const email = form.querySelector("div #email");
const password = form.querySelector("div #password");
// console.log(name1.value);
form.addEventListener("submit", formHandler);

function formHandler(e) {
  e.preventDefault();

  const userInfo = {
    name1: name1.value,
    email: email.value,
    password: password.value,
  };

  console.log(userInfo);
  name1.value = "";
  email.value = "";
  password.value = "";
}