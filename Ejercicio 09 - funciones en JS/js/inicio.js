// ***** funciones *****
function sumarDobles (a, b) {
    a *= 2;
    b *= 2;

    return a + b;
}

// Declaracion de una funcion como variable
// let n_var = "valor variable";
/* Como sumar es una variable no puedo llamar la "funcion" sumar antes de esta linea
   (no puedo llamar la funcion main antes de esta linea de codego)*/
let sumar = function (a,b) {
    return +a + +b;
}

// Declaración de una funcion arrow ( => )
let restar = (a, b) => {
    return a-b;
}


function main () {
    let nNum1 = Number(prompt("Dime un número", 12));
    let nNum2 = Number(prompt("Dime otro", 2));

    // console.log(sumar (nNum1, nNum2));
    // console.log(sumarDobles(nNum1, nNum2));
    let nResultSuma = sumar (nNum1, nNum2);
    let nResultSumaDoble = sumarDobles(nNum1, nNum2);
    let nResultResta = restar (nNum1, nNum2);

    console.log(nResultSuma);
    console.log(nResultSumaDoble);
    console.log(nResultResta);

}

// Invocación de la función
main();