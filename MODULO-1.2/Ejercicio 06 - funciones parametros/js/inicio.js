// ***** funciones *****

// si no pongo las variables = 0 y no le paso todo me restituye NaN
function sumar (a=0, b=0, c=0, d=0) {
    return a + b + c + d;
}

function sumarVarios (){
    let nResult = 0;

    for (var i=0; i < arguments.length ; i++)
        nResult += arguments[i];

    return nResult;
}

function media (){
    let nResult = 0;

    for (var i=0; i < arguments.length ; i++)
        nResult += arguments[i];
    
    nResult /= arguments.length;

    return nResult;
}

function sumarDobles (a=0,b=0) {
    a *= 2;
    b *= 2;

    return a + b;
}


function main () {
    let nNum1 = Number(prompt("Dime un número", 12));
    let nNum2 = Number(prompt("Dime otro", 6));
    let nNum3 = +(prompt("Dime otro", 3));
    let nNum4 = +prompt("Dime otro", 4);

    console.log(sumar (nNum1, nNum2));
    console.log(sumar (nNum1, nNum2, nNum3));
    console.log(sumar (nNum1, nNum2, nNum3, nNum4));
    console.log(sumarVarios (nNum1, nNum2, nNum3, nNum4, 13, 67, 5));
    console.log(media (nNum1, nNum2, nNum3, nNum4, 13, 67, 5));
    console.log(media (12, 12, 12, 12, 12));
    console.log(sumarDobles (nNum1, nNum2));
}

// Invocación de la función
main();