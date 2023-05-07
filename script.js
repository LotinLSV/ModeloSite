// este é o arquivo js para que irá conter todas as funcionalidades do site

function opCLickOn(){
    document.getElementsById("item-menu-contato").style.backgroundcolor = "red";
}


function onMousehover(){
    document.getElementById("div-contato-interno").style.backgroundColor = "#F0F8FF";
    document.getElementById('itens-menu-contato-interno').style.color = "black";
    document.getElementById('itens-menu-contato-interno2').style.color = "black";

}
function onMouseNothover(){
    document.getElementById("div-contato-interno").style.backgroundColor = "transparent";
    document.getElementById('itens-menu-contato-interno').style.color = "transparent";
    document.getElementById('itens-menu-contato-interno2').style.color = "transparent";
}
