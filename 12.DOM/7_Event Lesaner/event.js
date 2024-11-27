








var he1=document.querySelector("h1");

//mouseover & mouseout Event
he1.addEventListener("mouseover",function add()
{
    he1.classList.add("head");
});
//h.addEventListener("mouseover",function(){h.classList.add("head")}); //alternative

he1.addEventListener("mouseout",function add()
{
    he1.classList.remove("head");
});




//click event
var he2=document.querySelector("h2");
he2.addEventListener("click",function add()
{
    he2.classList.add("head");
});



