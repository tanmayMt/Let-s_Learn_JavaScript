var hea1 = document.querySelector("h1");
// hea1.innerHTML='CHanged';
document.addEventListener("keypress",function(event){
    var text = event.key;
    hea1.innerHTML="You have press: "+text;
    // document.write("keypress");
});