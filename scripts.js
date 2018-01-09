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
// document.getElementById("#").addEventListener("load", myFunction);
//
// function myFunction() {
//     document.getElementById("#").innerHTML = "Did some stuff.";
// }
