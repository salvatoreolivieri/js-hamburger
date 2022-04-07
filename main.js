
let hamburgerIcon = document.querySelector(".fa-bars");
let hiddenMenu = document.querySelector(".hamburger-menu");
let xIcon = document.querySelector(".fa-times");

hamburgerIcon.addEventListener("click", function(){
  hiddenMenu.classList.add('active');
});

xIcon.addEventListener("click", function(){
  hiddenMenu.classList.remove('active');
});