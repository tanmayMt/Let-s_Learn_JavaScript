len=document.querySelectorAll("button").length;
for(var i=0;i<len;i++)
{
    var b = document.querySelectorAll("button")[i];
    b.addEventListener("click",function()
    {
        // document.write(this.innerHTML);
        music(this.innerHTML);
    });
    // setTimeout(function(){this.pause();},3000);
}
function music(m)
{
    switch (m)
    {
        case 'A':
            var audio = new Audio("audio/A.mp3");
            audio.play();
            break;
    
        case 'B':
            var audio = new Audio("audio/IPL.mp3");
            audio.play();
            break;

        case 'C':
            var audio = new Audio("audio/C.mp3");
            audio.play();
            break;
    }
}