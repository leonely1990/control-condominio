let boton_menu_movil = document.getElementById("menu-movil__img");
let boton_cerrar_menu_movil = document.getElementById("cerrar-menu-movil");

let titulo = document.title;

for (const elemento of document.getElementsByClassName("boton-menu")) {
    if(titulo === elemento.innerHTML){
        elemento.parentNode.className += " active";
    }
}

boton_cerrar_menu_movil.addEventListener("click", () => {
    document.getElementById("menu-movil__div").className = "menu-deactive";
});

boton_menu_movil.addEventListener("click", () => {
    console.log(document.getElementById("menu-movil__div").classList);
    if(document.getElementById("menu-movil__div").classList.length > 0){
        for(let i of document.getElementById("menu-movil__div").classList){
            console.log("Entre al for");
            if(i == "menu-active"){
                document.getElementById("menu-movil__div").className = "menu-deactive";
            }else if(i == "menu-deactive"){
                document.getElementById("menu-movil__div").className = "menu-active";
            }
        }
    }else{
        document.getElementById("menu-movil__div").className = "menu-active";
    }
});