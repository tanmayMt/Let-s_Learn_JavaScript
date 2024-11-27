var len = document.querySelectorAll("button").length;
// console.log(len);
for(var i=0;i<len;i++)
{
    var b = document.querySelectorAll(".myButton")[i];
    var h = document.querySelector("h1");
    b.addEventListener("click",function(){
        console.log(h.innerHTML);
        console.log(this.innerHTML);
        h.innerHTML="You have clicked button "+this.innerHTML;
        music(this.innerHTML);
        pay_animation("."+this.innerHTML);
    });
}


function music(b)
{
    switch(b)
    {
        case 'a':
            var audio = new Audio("audio/All.mp3");
            audio.play();
            break;
    
        case 'b':
            var audio = new Audio("audio/khu.mp3");
            audio.play();
            break;

        case 'c':
            var audio = new Audio("audio/Smart.mp3");
            audio.play();
            break;
    }
}

function pay_animation(b)
{
    //console.log(b);
    var selected_button=document.querySelector(b);
    //var selected_button=b;
    //console.log(selected_button);
    //selected_button.classList.add("anim");
    selected_button.classList.add("anim");

    //Remove Animation After few time
    setTimeout(function(){
        selected_button.classList.remove("anim");
    },1600)
}