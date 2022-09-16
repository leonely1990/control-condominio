

let titulo = document.title;

for (const elemento of document.getElementsByClassName("boton-menu")) {
    if(titulo === elemento.innerHTML){
        elemento.parentNode.className += " active";
    }
}