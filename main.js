
let hamburgerIcon = document.querySelector(".fa-bars");
let hiddenMenu = document.querySelector(".hamburger-menu");
let xIcon = document.querySelector(".fa-times")

hamburgerIcon.addEventListener("click", function(){
  hiddenMenu.classList.add = ".hamburger-menu.active";
});

xIcon.addEventListener("click", function(){
  hiddenMenu.classList.cssText = ".hamburger-menu.";
});