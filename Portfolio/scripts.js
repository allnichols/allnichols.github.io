// navigation/overlay functionallity

const openTag = document.getElementsByTagName('svg')[0];
const nav = document.querySelector('.overlay-nav');
const close = document.querySelector('.closeBtn');


openTag.addEventListener("click", (e)=> {
    nav.style.height = "30%";
});

close.addEventListener("click", (e)=>{
  nav.style.height = "0%"
});

//end of navigation/overlay functionallity

//Contact overlay

const btn       = document.querySelector('.contact-btn');
const overlay   = document.querySelector('.form-overlay');
const form      = document.querySelector('.form-div');
const closeBtn  = document.querySelector('.modal-close')

btn.addEventListener("click", () => {
  overlay.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});
