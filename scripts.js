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

//Back to top button
const topBtn = document.getElementById('toTop');

window.onscroll = function(){scroll()};

function scroll(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    topBtn.style.opacity = "1";
  } else {
    topBtn.style.opacity = "0";
  }
}

topBtn.addEventListener("click", (e)=> {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})


//icons functionallity.

const html = document.querySelector('.html')
html.addEventListener("load", ()=> html.style.animation = "change .8s ease-in-out .5s");

const css = document.querySelector('.css');
css.addEventListener("load", ()=> css.style.animation = "change .8s ease-in-out .9s");

const sass = document.querySelector('.sass');
sass.addEventListener("load", ()=>{
  sass.style.animation = "change .8s ease-in-out 1.3s";
});

const js = document.querySelector('.js');
js.addEventListener("load", ()=>{
  js.style.animation = "change .8s ease-in-out 1.7s";
});

const react = document.querySelector('.react');
const circle = document.querySelector('circle');
react.addEventListener("load", ()=>{
  react.style.animation = "spin .8s ease-in-out 2.1s";
  circle.style.fill = "white";
});
