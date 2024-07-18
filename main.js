/*  Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

if ("loading" in HTMLImageElement.prototype) {
  console.log("El navegador soporta `lazy-loading`...");
} else {
  console.log("`lazy-loading` no soportado...");
}