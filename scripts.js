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



//icons functionallity.
//needs refactoring.
//think for loops and adding class attributes with their values.
const html = document.querySelector('.html')
html.addEventListener("load", ()=> html.style.animation = "change .8s ease-in-out .5s");

const css = document.querySelector('.css');
css.addEventListener("load", ()=> css.style.animation = "change .8s ease-in-out .9s");

const sass = document.querySelector('.sass');
sass.addEventListener("load", ()=>{
  sass.style.animation = "change .8s ease-in-out 1.3s";
  //add color change
});

const js = document.querySelector('.js');
js.addEventListener("load", ()=>{
  js.style.animation = "change .8s ease-in-out 1.7s";
  //add color change
});

const react = document.querySelector('.react');
react.addEventListener("load", ()=>{
  react.style.animation = "change .8s ease-in-out 2.1s";
  //add color change
});
