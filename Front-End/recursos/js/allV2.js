let boton_menu_movil = document.getElementById("menu-movil__img");

let titulo = document.title;

for (const elemento of document.getElementsByClassName("boton-menu")) {
    if(titulo === elemento.innerHTML){
        elemento.parentNode.className += " active";
    }
}

boton_menu_movil.addEventListener("click", () => {
    console.log(document.getElementById("menu-movil").classList);
    if(document.getElementById("menu-movil").classList.length > 0){
        for(let i of document.getElementById("menu-movil").classList){
            console.log("Entre al for");
            if(i == "menu-active"){
                console.log("primer if");
                document.getElementById("menu-movil").className = "menu-deactive";
            }else if(i == "menu-deactive"){
                console.log("segundo if");
                document.getElementById("menu-movil").className = "menu-active";
            }
        }
    }else{
        document.getElementById("menu-movil").className = "menu-active";
    }
});