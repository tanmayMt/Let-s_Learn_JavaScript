var h = document.getElementsByTagName("body")[0];
var i = document.createElement("h6");
var text1=document.createTextNode("New text");
i.appendChild(text1);
h.appendChild=i;

//remove
// var d=document.getElementsByClassName("my-div");
// d.removeChild(d[1]);

//DOM traversal

var d=document.getElementsByClassName("my-div");
d.children.innerHTML="Bi";