const tipo = document.getElementById("tipo-correo");
const enviar_correo = document.getElementById("enviar-correo");
const cerrar = document.getElementById("cerrar").addEventListener("click", () => {
    document.getElementsByClassName("popups")[0].style.display = "none";
});

document.getElementById("seccion-"+tipo.value).style.display = "flex";

tipo.addEventListener("change", () => {
    
    for (const iterator of tipo.options) {
        if(iterator.value === tipo.value){
            document.getElementById("seccion-"+iterator.value).style.display = "flex";
        }else{
            document.getElementById("seccion-"+iterator.value).style.display = "none";
        }
    }

});

enviar_correo.addEventListener("click", () => {
    document.getElementsByClassName("popups")[0].style.display = "flex";
});