// Name - Parteek
// Email - parteek@sheridancollege.ca
// Date - 5 June, 2022
// Description - This file has all the javascript functions for the assignment

document.addEventListener("DOMContentLoaded", main);

function main()
{
    
    console.log("start!");
    // initialise webgl
    initWebGL("DeBugger");


    var heading = document.getElementById('heading');
    var thumb1 = document.getElementById('thumb1');
    var thumb2 = document.getElementById('thumb2');
    var thumb3 = document.getElementById('thumb3');
    var thumb4 = document.getElementById('thumb4');
    var thumb5 = document.getElementById('thumb5');
    var texture = document.getElementById('texture');
    var spin = document.getElementById('spin');
    var camera = document.getElementById('reset');

    texture.checked = true;
    spin.checked = false;

    
    thumb1.addEventListener('click', function handleClick() {
      console.log('DeBugger clicked');
      heading.innerText = 'DeBugger';
      loadModelByName("DeBugger");
    });

    thumb2.addEventListener('click', function handleClick() {
        console.log('Celestia clicked');
        heading.innerText = 'Celestia';
        loadModelByName("Celestia");
    });

    thumb3.addEventListener('click', function handleClick() {
        console.log('Totoro clicked');
        heading.innerText = 'Totoro';
        loadModelByName("Totoro");
    });
      
    thumb4.addEventListener('click', function handleClick() {
        console.log('LuckyCat clicked');
        heading.innerText = 'Lucky Cat';
        loadModelByName("Lucky Cat");
    });
    
    thumb5.addEventListener('click', function handleClick() {
        console.log('Beethoven clicked');
        heading.innerText = 'Beethoven';
        loadModelByName("Beethoven");
    });
      
    texture.addEventListener('click', function handleClick(){
        if(texture.checked == false){
            toggleTexture(false);
            console.log('texture off');
        }
        else if(texture.checked == true){
            toggleTexture(true);
            console.log('texture on');
        }
        
    });

    spin.addEventListener('click', function handleClick(){
        if(spin.checked == true){
            toggleSpin(true);
            console.log('spin start');
        }
        else if(spin.checked == false){
            toggleSpin(false);
            console.log('spin stop');
        }
    });

    camera.addEventListener('click', function handleClick(){
        resetCamera();
        console.log('reset camera');
    });


    document.addEventListener('keydown', function(e) {
        switch (e.keyCode) {
            case 37:
                startShiftCamera(1,0);
                // stopShiftCamera();
                break;
            case 38:
                startShiftCamera(0,1);
                // stopShiftCamera();
                break;
            case 39:
                startShiftCamera(-1,0);
                // stopShiftCamera();
                break;
            case 40:
                startShiftCamera(0,-1);
                // s
                break;
        }
    });

    document.addEventListener('keyup', function(e) {
        stopShiftCamera();
    });

}

