// KeyboardEvent Object
// 1. Keydown - pressing a key, can repeat
// 2. keypress (may not supported by some browsers)
// 3. keyup
// some properties - key, keyCode, code, shiftKey, ctlKey, repeat

const textarea = document.querySelector("textarea");
textarea.addEventListener("keydown", function (e) {
  console.log(e.key)
  if (e.repeat) {
    alert("Warning! Please do not repeat");
  }
});

// textarea.addEventListener("keypress", function () {
//   console.log("keypress");
// });

// textarea.addEventListener("keyup", function (e) {
//   console.log("keyup")
//   if (e.shiftKey) {
//     console.log("shift+" + e.key);
//   }
// });
