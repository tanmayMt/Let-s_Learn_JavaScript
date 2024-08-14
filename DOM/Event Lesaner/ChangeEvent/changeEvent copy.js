



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


