
let hamburgerIcon = document.querySelector(".fa-bars");
let hiddenMenu = document.querySelector(".hamburger-menu");
let xIcon = document.querySelector(".fa-times")

hamburgerIcon.addEventListener("click", function(){
  hiddenMenu.style.cssText = "display: block; top: 70px;";
});

xIcon.addEventListener("click", function(){
  hiddenMenu.style.cssText = "display: none;";
});