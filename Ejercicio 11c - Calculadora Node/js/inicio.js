const prompt = require('prompt');

const RICHIESTA = `Que operación quieres hacer?
's' = suma 'r' = resto 'd' = 'dividir 'm' = moltiplicar`;

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

let imprimir = (datos) => {
    if (isNaN(datos)){
        console.log("No has puesto dos numeros");
    }else {
        console.log("El resultado es: " + datos);
    }
}

(function main () {
    let oDatos = {
        properties : {
            num1: {
                description: 'Escribe un numero',
                default: 24,
            },
            num2: {
                description: 'Escribe otro',
                default: 2,
            },
            operacion: {
                description: RICHIESTA,
                default: 's'
            }
        }
    }

    prompt.start();

    prompt.get(oDatos, function (err, result){
        let sRespuesta = calculadora (restult.num1, result.num2, result.operacion);
        imprimir (sRespuesta);
    });
        
}) ();