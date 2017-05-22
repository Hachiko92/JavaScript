console.log (nValue);
oButton.onClick = calcular (nValue);
console.log (nValue);

/* variables */
var oButton = document.querySelector("#button1");
var nValue = Number(document.querySelector("#number"));
var oRespuesta = document.querySelector("#result");

function calcular (numero) {
    console.log(numero);
    let sResult = "Nulla";
    if ((numero%2) == 0){
        console.log(numero);
        sResult = "Numero par";
        console.log = "Numero par";
    } else {
        sResult = "Numero impar";
        console.log = "Numero impar";
    }
    oRespuesta.innerHTML = sResult;
}

