const prompt = require('prompt');

/* ***** Functiones ***** */
let sumar = (a, b) => {
    return Number(a) + Number(b)
}

let restar = (a, b) => {
    return a - b;
}

let dividir = (a, b) => {
    return a / b;
}

let moltiplicar = (a, b) => {
    return a * b;
}

// Normalmente las funciones no imprimen nada en plantalla, lo hace el "main"
let calculadora = (a=0, b=0, char) => {
    let result = 0;
    
    if (char == 's' || char == 'S'){
        result = (sumar(a, b));
    } else{
        if (char == 'r' || char == 'R'){
            result = (restar(a, b));
        } else {
            if (char == 'd' || char == 'D'){
                result = (dividir(a,b));
            } else {
                if (char == 'm' || char == 'M'){
                    result = (moltiplicar(a,b));
                } else {
                    result = ("Scelta invalida");
                }
            }
        }
    }

    return (result);
}

let imprimir = (datos) => {
    if (isNaN(datos)){
        console.log("No has puesto dos numeros");
    }else {
        console.log("El resultado es: " + datos);
    }
}

(function main () {
    let prompt = prompt ();
    let nNum1 = Number(prompt("Dime primer numero", 12));
    let nNum2 = Number(prompt("Dime otro", 2));
    let richiesta = `Que operación quieres hacer?
    's' = suma 'r' = resto 'd' = 'dividir 'm' = moltiplicar`;
    let sOperador = prompt(richiesta, 's');

    let sRespuesta = calculadora (nNum1, nNum2, sOperador);

    imprimir (sRespuesta);
    
}) (); 