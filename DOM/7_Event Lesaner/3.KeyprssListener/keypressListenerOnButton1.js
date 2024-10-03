var h = document.querySelector("h1");

document.addEventListener("keypress",function(event){
    var k = event.key;
    console.log(h.innerHTML);
    console.log(k);
    h.innerHTML="You have clicked button "+k;
    music(k);
    pay_animation("."+k);
    });


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