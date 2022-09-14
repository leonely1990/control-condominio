const tipo = document.getElementById("tipo-correo");
const enviar_correo = document.getElementById("enviar-correo");
const pagos = document.getElementById("verPagos");
const cerrar = document.getElementsByClassName("cerrar");
const prueba = document.getElementsByClassName("prueba");

for (let i = 0; i < cerrar.length; i++) {
    cerrar[i].addEventListener( "click", () => {
        document.getElementsByClassName("popups")[0].style.display = "none";
        for (let j = 0; j < prueba.length; j++) {
            prueba[j].style.display = "none";            
        }
    });
    
}

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
    document.getElementById("correo").style.display = "flex";
});

pagos.addEventListener("click", () => {
    document.getElementsByClassName("popups")[0].style.display = "flex";
    document.getElementById("pagos").style.display = "flex";
});