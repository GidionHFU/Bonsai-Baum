document.addEventListener("DOMContentLoaded", function () {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var images = [];

  if (screenWidth <= 768) {
       images = [
        "content/Mobile/MobileNEU.jpg",
        "content/Mobile/MobileNEU2.jpg",
        "content/Mobile/MobileNEU1.jpg"
       ];
  } else {
   images = ["content/grün2.jpg",
   "content/türkis2.jpg",
   "content/rot2.jpg"
   ];
  }

  var index = 0;
  var container = document.querySelector(".slider");

  function changeBackground() {
      container.style.backgroundImage = "url('" + images[index] + "')";
      index = (index + 1) % images.length;
  }

  // Initial background image
  changeBackground();

  // Change background every 5 seconds (5000 milliseconds)
  setInterval(changeBackground, 5000);
});

function background1 () {
  var screenWidth2 = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (screenWidth2 <= 768) {
      document.getElementById("slider").style.backgroundImage = "url(content/Mobile/MobileNEU.jpg)"   
  } else {
   document.getElementById("slider").style.backgroundImage = "url(content/grün2.jpg)"   
  }


}

function background2 () {
  var screenWidth2 = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

if (screenWidth2 <= 768) {
document.getElementById("slider").style.backgroundImage = "url(content/Mobile/MobileNEU2.jpg)"   
} else {
document.getElementById("slider").style.backgroundImage = "url(content/türkis2.jpg)"   
}
}

function background3 () {
  var screenWidth2 = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

if (screenWidth2 <= 768) {
document.getElementById("slider").style.backgroundImage = "url(content/Mobile/MobileNEU1.jpg)"   
} else {
document.getElementById("slider").style.backgroundImage = "url(content/rot2.jpg)"   
}
}
window.addEventListener("scroll", reveal);
function reveal() 
{
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint){
      reveals[i].classList.add("active");
    }
    else {
      reveals[i].classList.remove("active");
    }
  }
}