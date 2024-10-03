var hea1 = document.querySelector("h1");
// hea1.innerHTML='CHanged';
document.addEventListener("keypress",function(event){
        /* The 'event' object is used to capture information 
           about the keypress event that occurre*/
    var text = event.key; //This property returns the key that was pressed
    hea1.innerHTML="You have press: "+text;
    // document.write("keypress");
});