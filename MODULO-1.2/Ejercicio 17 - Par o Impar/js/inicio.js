var oButton = document.querySelector("#button");
var nValue = document.querySelector("#number");
var sRespuesta = document.querySelector("#result");

oButton.onclick = calcular (nValue);

function calcular (nValue) {
    if ((nValue%2) == 0){
        sRespuesta.innerHTML = "Numero par";
        console.log = "Numero par";
    } else {
        sRespuesta.innerHTML = "Numero impar";
        console.log = "Numero impar";
    }
}

