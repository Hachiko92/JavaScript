/* variables */
var oButton = document.querySelector("#button");
var nValue = document.querySelector("#number");
var sRespuesta = document.querySelector("#result");

oButton.onclick = calcular (nValue);


function calcular (numero) {
    console.log(numero);
    let sResult;
    if ((numero%2) == 0){
        console.log(numero);
        sResult = "Numero par";
        console.log = "Numero par";
    } else {
        sResult = "Numero impar";
        console.log = "Numero impar";
    }
    sRespuesta.innerHTML = sResult;
}

