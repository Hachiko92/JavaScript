/* ***** Functiones ***** */
let factorial = (a=0) => {
    let result = a;
    
    for (let i = (a-1); i> 0 ; i--){
        result *= i;
    }

    return result;

}

let todo = (dato) => {
    if (isNaN(dato)){
        console.log("No has puesto un numeros");
    }else {
        let sRespuesta = factorial (dato);
        console.log("El resultado es: " + sRespuesta);
    }
}

(function main () {
    let nNum1 = Number(prompt("Dime primer numero", 12));
    
    todo (nNum1);
    
}) (); 

