var len = document.querySelectorAll("button").length;
for(var i=0;i<len;i++)
{
    var b = document.querySelectorAll("button")[i];
    b.addEventListener("click",function(){
        music(this.innerHTML);
        pay_animation(this.innerHTML);
    });
}


function music(b)
{
    switch(b)
    {
        case 'A':
            var audio = new Audio("audio/All.mp3");
            audio.play();
            break;
    
        case 'B':
            var audio = new Audio("audio/khu.mp3");
            audio.play();
            break;

        case 'C':
            var audio = new Audio("audio/Smart.mp3");
            audio.play();
            break;
    }
}

function pay_animation(b)
{
    var selected_button=document.querySelector(b);
    selected_button.classList.add("anim");
}