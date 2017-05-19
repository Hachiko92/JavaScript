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
    switch (char) {
        case 's':
        case 'S':
        case '+':
            result = (sumar(a, b));
            break;
        case 'r':
        case 'R':
        case '-':
            result = (restar(a, b));
            break;
        case 'd':
        case 'D':
        case '/':
        case ':':
            result = (dividir(a,b));
            break;
        case 'm':
        case 'M':
        case '*':
        case 'x':
        case 'X':
            result = (moltiplicar(a,b));
            break;
        default:
            result = ("Scelta invalida");
            break;
    }

    return result;

}

let imprimir = (datos) => {
    if (isNaN(datos)){
        console.log("No has puesto dos numeros");
    }else {
        console.log("El resultado es: " + datos);
    }
}

(function main () {
    let nNum1 = Number(prompt("Dime primer numero", 12));
    let nNum2 = Number(prompt("Dime otro", 2));
    let richiesta = `Que operación quieres hacer?
    's' = suma 'r' = resto 'd' = 'dividir 'm' = moltiplicar`;
    let sOperador = prompt(richiesta, 's');

    let sRespuesta = calculadora (nNum1, nNum2, sOperador);

    imprimir (sRespuesta);
    
}) (); 