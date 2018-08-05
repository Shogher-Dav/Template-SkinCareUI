let url=[
    'url(https://cdn.shopify.com/s/files/1/2031/5633/collections/wrinkles_3fac367a-4582-4ba3-933d-94baf65eefb6_1600x.jpg?v=1505827826)',
    'url(http://cdn.shopify.com/s/files/1/2031/5633/collections/aging_1600x.jpg?v=1505827811)',
    'url(https://cdn.shopify.com/s/files/1/2031/5633/collections/dryness_1600x.jpg?v=1505827844)',
    'url(http://cdn.shopify.com/s/files/1/2031/5633/collections/skintone_b72f468f-c35d-49d9-a264-2747a22222f8_1600x.jpg?v=1505827799)',
    'url(http://cdn.shopify.com/s/files/1/2031/5633/collections/acne_b998451a-b396-45b5-a7a1-27d0c8eb2472_1600x.jpg?v=1505827928)',
    'url(http://cdn.shopify.com/s/files/1/2031/5633/collections/oiliness_1600x.jpg?v=1505827909)',
    'url(http:////cdn.shopify.com/s/files/1/2031/5633/collections/crowsfeet_1600x.jpg?v=1505827884)',
    'url(http://cdn.shopify.com/s/files/1/2031/5633/collections/pores_1600x.jpg?v=1505827950)',
    'url(http://cdn.shopify.com/s/files/1/2031/5633/collections/firmness_0265565d-0819-4cbb-8bef-d475da39bc06_1600x.jpg?v=1505827785)',
    'url(http://cdn.shopify.com/s/files/1/2031/5633/collections/darkspots_1600x.jpg?v=1505827965)'
]
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
    
    
    function changeBackground(solution) {
       mainContainer = document.getElementById('main-container');
       mainContainer.style.backgroundImage = url[solution.id];
    }
    function returnBackground() {
        mainContainer = document.getElementById('main-container');
        mainContainer.style.backgroundImage = 'url(http://cdn.shopify.com/s/files/1/2031/5633/files/Landing_1600x.jpg?v=1505827704)';
    }

