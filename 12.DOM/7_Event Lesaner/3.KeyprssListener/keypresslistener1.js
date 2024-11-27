var textarea1=document.querySelector("textarea");
var count=0;
textarea1.addEventListener("keypress",function(event)
{
    count=count+1;
    
    var hea1 = document.querySelector("h1");
    hea1.innerHTML="No. of character you have enter: "+count;
});



