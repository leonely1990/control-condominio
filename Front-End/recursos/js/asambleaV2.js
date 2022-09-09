const crear_propuesta = document.getElementById("crear-propuesta");
const popups = document.getElementsByClassName("popups");
const cerrar_popups = document.getElementById("cerrar-popups");

crear_propuesta.addEventListener("click", () => {popups[0].style.display = "flex";});
cerrar_popups.addEventListener("click", () => {popups[0].style.display = "none";});