//

// main-entry point
document.addEventListener("DOMContentLoaded", main);
function main()
{
    log("loaded");

    // create instance of Timer class
    let timer = new Timer();

let animId; // remember ID to stop frame

// request DOM for time text
let time = document.getElementById("time");

let button = document.getElementById("buttonTimer");
button.addEventListener("click", handleClick);

function handleClick()
{
    
    if(button.innerText == "Start")
    {
    // start timer
    
    
    animId = setInterval(frame, 1); // every 1ms
    function frame()
    {
        time.innerText = timer.getTimeString();
    }

    button.innerText = "Stop";
    timer.timerStart();

    }
    // stop timer
    else
    {
    timer.timerStop();
    clearInterval(animId); // stop interval
    time.innerText = timer.getTimeString();
    button.innerText = "Start";
    }
}
}