const navToggle = document.getElementById('nav-toggle');
const navItems = document.querySelector('.nav-items');
const navImg = document.querySelector('.nav-img');

navToggle.addEventListener('click', e => {
    e.preventDefault();

    navItems.classList.toggle('visible');
    
    navItems.classList.contains('visible') ? navImg.src = './images/icon-close.svg' : navImg.src = './images/icon-hamburger.svg';
});