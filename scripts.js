// navigation/overlay functionallity

const openTag = document.getElementsByTagName('svg')[0];
const nav = document.querySelector('.overlay-nav');
const close = document.querySelector('.closeBtn');


openTag.addEventListener("click", (e)=> {
    nav.style.height = "35%";
});

close.addEventListener("click", (e)=>{
  nav.style.height = "0%"
});

//end of navigation/overlay functionallity



//add js for the tools icons. on page load each will blink for half - a full second.
const icons = document.getElementsByClassName("load");



const html = document.querySelector('.html');
const css = document.querySelector('.css');
const sass = document.querySelector('.sass');
const js = document.querySelector('.js');
const react = document.querySelector('.react');

document.getElementsByTagName('body')[0].addEventListener("load", ()=> html.classList.add());

console.log(html, css, sass, js, react);
