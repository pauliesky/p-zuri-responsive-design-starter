var menuBotton = document.querySelector('.menu-botton');
var navLinks = document.querySelector('.nav-links');
var ClosedButton = document.querySelector('.close-button');
menuBotton.addEventListener('click',()=> {
    navLinks.style.left = '0' 
} )
ClosedButton.addEventListener('click', ()=> {
    navLinks.style.left = '-60rem'
})