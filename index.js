var main = document.getElementById("main");
var nav = document.getElementById("nav");

var sticky = nav.offsetTop;
window.onscroll = function () {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};
