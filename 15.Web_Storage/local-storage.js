// Web storage API - allows us to store & read data in browser
// Web storage API - localStorage, sessionStorage

// localStorage - store, read, update and remove data
// no expiry date: data never gets lost even if you close the browser

// localStorage store data as key value pair - string

console.clear();
console.log(window.localStorage);  //console.log(localStorage);


localStorage.setItem("name","Avik"); 
const name = localStorage.getItem("name");  // getItem(key)
console.log(name);


localStorage.setItem("userName", "Snis Roy");
localStorage.setItem("password", "0123456789");

const userName = localStorage.getItem("userName");
const userPassword = localStorage.getItem("password");
console.log(userName, userPassword);
