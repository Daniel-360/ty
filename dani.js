
/*
// not functioning and don't know why????
const hamburger = document.querySelector('header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('acive');
});

*/


document.querySelector('.hamburger').addEventListener('click', ()=>{
    document.querySelector('.hamburger').classList.toggle('active');
    document.querySelector('ul').classList.toggle('active');
});