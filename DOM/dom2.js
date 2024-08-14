var s1 = document.querySelector("#heading2");
s1.innerHTML="h2 is changed";


var s2 = document.querySelector(".para1");
s1.innerHTML="1st p is changed";

var s1 = document.querySelector("a");
s1.innerHTML="2nd p is changed";

var p = document.querySelectorAll("h3")[1];
p.innerHTML="<del>This is 1st h3 text</del>   Changed";

var p = document.querySelectorAll("h3")[0];
p.innerHTML="<del>This is 1st h3 text</del>   Changed";