window.onscroll = function() {navegacion()};

var nav = document.getElementById("navegacion");

var fijo = nav.offsetTop;

function navegacion() {
  if (window.pageYOffset >= fijo) {
    nav.classList.add("fijo")
  } else {
    nav.classList.remove("fijo");
  }
}