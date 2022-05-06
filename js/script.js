function openNav() {
    document.getElementById("mySidebar").style.width = "680px";
    document.getElementById("main").style.marginLeft = "680px";
  }
  
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar1").style.top = "0";
  } else {
    document.getElementById("navbar1").style.top = "-100px";
  }
}