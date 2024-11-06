// js BOM
// popup boxes - alert, confirm, prompt

function deleteSomething() {
  let value = confirm("Do you want to delete?");
  if (value) {
    console.log("Deleted");
  } else {
    console.log("Not Deleted");
  }
}
deleteSomething();


