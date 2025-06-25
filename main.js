/*  Alternar entre agregar y eliminar la clase "responsive" a topnav cuando el usuario hace clic en el icono */

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

// filepath: c:\Users\axl65\OneDrive\Proyectos\multiventascya.github.io\Salud&Belleza.html
document.querySelectorAll(".whatsapp-link").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    var card = link.closest(".card");
    var nombre = card.querySelector(".title-prod-1").innerText.trim();
    var url =
      "https://wa.me/529995823756?text=" +
      encodeURIComponent("Hola, me interesa el producto: " + nombre);
    window.open(url, "_blank");
  });
});
