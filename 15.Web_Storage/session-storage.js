// localStorage vs sessionStorage
// 10mb vs 5mb
// permanent vs session (tab)

sessionStorage.setItem("user1", "anis");
sessionStorage.setItem("user2", "linkon");
const userName = sessionStorage.getItem("user1");
console.log(userName);

sessionStorage.removeItem("user1");

// sessionStorage.clear();

const user = { id: "101", name: "anisul" };
sessionStorage.setItem("user", JSON.stringify(user));

const userInfo = JSON.parse(sessionStorage.getItem("user"));
console.log(userInfo);