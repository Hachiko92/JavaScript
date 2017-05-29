console.log (nValue);
oButton.onclick() = calcular;
console.log (nValue);

/* variables */
var oButton = document.querySelector("#button1");
var nValue = Number(document.querySelector("#number"));
var oRespuesta = document.querySelector("#result");

function calcular () {
    console.log(nValue);
    let sResult = "Nulla";
    if ((nValue%2) == 0){
        console.log(nValue);
        sResult = "nValue par";
        console.log = "nValue par";
    } else {
        sResult = "nValue impar";
        console.log = "nValue impar";
    }
    oRespuesta.innerHTML = sResult;
}

