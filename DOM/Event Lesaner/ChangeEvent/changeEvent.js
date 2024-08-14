
//var input1=document.querySelector("input");
var input1=document.querySelector("input[name=name]");
input1.addEventListener("change",changeHandler);

function changeHandler(event)
{
    // console.log(event);
    // console.log(event.type);
    // console.log(event.target);
    // document.write(event.target);
    // console.log(event.target.value);
    // console.log(event.target.id);
    // console.log(event.target.className);
    console.log()
}



//checkbox input tag
var programs=document.querySelectorAll("input[name=program]");
//console.log(programs);

Array.from(programs).map((program)=>{
    program.addEventListener("change",changeHandler1)
});
function changeHandler1(e) {
    // console.log(e.target);
    // console.log(e.type);
    // console.log(e.target.value);
    //console.log(e.target.value," is Checked");
    if (e.target.checked)
    {
        console.log(e.target.value);
    }
}



//select input tag
var dep=document.querySelectorAll("select[name=department]");
var dep=document.querySelector("#department");
console.log(dep);
dep.addEventListener("change",changeHandler2);
function changeHandler2(e)
{
    console.log(e.target.value);
}

