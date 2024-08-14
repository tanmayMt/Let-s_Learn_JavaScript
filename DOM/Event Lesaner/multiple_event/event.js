he1=document.querySelector("h1");   // <h1>


// var b = document.querySelectorAll("button")[0]; //<button>
// b.addEventListener("click",function()
// {
//     var text=this.innerHTML;
//     he1.innerHTML=text+" is clicked";
// });

// var b = document.querySelectorAll("button")[1]; //<button>
// b.addEventListener("click",function()
// {
//     var text=this.innerHTML;
//     he1.innerHTML=text+" is clicked";
// });

// var b = document.querySelectorAll("button")[2]; //<button>
// b.addEventListener("click",function()
// {
//     var text=this.innerHTML;
//     he1.innerHTML=text+" is clicked";
// });

var len=document.querySelectorAll("button").length; //no. of button
for(var i=0;i<len;i++)
{
    var b = document.querySelectorAll("button")[i]; //<button>
    b.addEventListener("click",function(){
        var text=this.innerHTML;
        he1.innerHTML=text+" is clicked";
    });
}
