// main entry point
document.addEventListener("DOMContentLoaded", main);

function main()
{
    // query all thumbnails
    // i used 'getElementsByClassName("thumb")', instead of 'querySelectorAll(".thumbblock .thumb")'
    let thumbs = document.getElementsByClassName("thumb");
    
    // iterate all thumbs
    for(let thumb of thumbs){
        // don't mind my "hehe" function, i wasn't able to think any other name
        thumb.addEventListener("click", function hehe()
        {
            let msg = document.getElementById("msg");
            msg.innerText = thumb.innerText;
        });
    }
}