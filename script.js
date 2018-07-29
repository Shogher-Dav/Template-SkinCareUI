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

function openSolutions() {
    const solutions = document.getElementById('solution');
    solutions.style.display='block';
    solutions.style.height='100vh';
}
function closeSolutions() {
    const solutions = document.getElementById('solution');
   // solutions.style.display='none';
    solutions.style.height='0';

}

function openSlideMenu() {
    const leftSideMenu = document.getElementById('left-side-menu');
    const menu = document.getElementById('menu');
    const logo = document.getElementById('logo');
    menu.classList.add('header-active-style');
    logo.style.filter = 'none';
    leftSideMenu.classList.toggle('show-left-bar');
}