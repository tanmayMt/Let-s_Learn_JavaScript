// js BOM
// popup boxes - alert, confirm, prompt

// function deleteSomething() {
//   let value = confirm("Do you want to delete?");
//   if (value) {
//     console.log("Deleted");
//   } else {
//     console.log("Not Deleted");
//   }
// }
// deleteSomething();


function welcomeMessage() {
  var h1 = document.createElement("h1");
  let text;

  var name = prompt("Enter your name: ");
  if (name == null || name == "") {
    text = "no name found";
  } else {
    text = "Welcome " + name;
  }
  var textNode = document.createTextNode(text);
  h1.appendChild(textNode);
  document.body.appendChild(h1);
}

welcomeMessage();