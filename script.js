
var createKeyframe = require('create-keyframe');
 function addClass(){
    const headerSolution = document.getElementById('header-solution');
    headerSolution.style.display = 'flex';
    for(let i=0; i<10; i++) {
     headerSolution.getElementsByClassName("header-solution-item")[i].style.animationName = 'shimmy'; 
     headerSolution.getElementsByClassName("header-solution-item")[i].style.animationDuration = ` 0.3s`; 
     headerSolution.getElementsByClassName("header-solution-item")[i].style.animationDirection = 'alternate';
     headerSolution.getElementsByClassName("header-solution-item")[i].style.animationFillMode = 'forwards';
     headerSolution.getElementsByClassName("header-solution-item")[i].style.animationDelay = `${i*0.05}s`;
        
    }
}
function removeClass(){
    const headerSolution = document.getElementById('header-solution');
    headerSolution.style.display = 'none';
}