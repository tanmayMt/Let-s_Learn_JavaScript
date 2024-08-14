var ph=["1.jpg","kolkata.jpg","Italy.jpg","sydney.jpg"];
var c=0;

var i = document.getElementById("im");


function next()
{
    c++;
    if(c>=ph.length)
        c=0;
    i.src=ph[c];
}

function prev()
{
    c--;
    if(c<0)
        c=ph.length-1;
    i.src=ph[c];
    alert("prev() is called");
}