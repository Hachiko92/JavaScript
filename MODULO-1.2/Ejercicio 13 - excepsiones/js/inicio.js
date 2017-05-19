/* ***** Functiones ***** */
let factorial = (a=0) => {
    let aMensajes = [
        "No existe el factorial de 0",
        "Solo existen factoriales de los números",
        "No puedes usar números tan grandes (mayores de 170)"
    ]

    try {
        if (a == 0) { throw 0; }
        if (isNaN(Number(a))) { throw 1; }
        if (a > 170) { throw 2; }
    } catch (error) {
        return aMensajes [error];
    }
    
    let result = a;
    
    for (let i = (a-1); i> 0 ; i--){
        result *= i;
    }

    return ("El resultado es: " + result);

}// fin de la funcion "factorial"

let todo = (dato) => {
    if (isNaN(dato)){
        console.log("No has puesto un numeros");
    }else {
        let sRespuesta = factorial (dato);
        alert(sRespuesta);
    }
}// fin de la funcion "todo"

(function main () {
    let nNum1 = Number(prompt("Dime primer numero", 12));

    try {
        todo (nNum1);
    } catch (error) {
        alert ("Error: " + error);
    }
}) (); 

