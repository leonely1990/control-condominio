const tipo = document.getElementById("tipo-correo");

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