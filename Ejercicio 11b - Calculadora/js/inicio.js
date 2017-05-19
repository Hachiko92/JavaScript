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

let calculadora = (a=0, b=0, char) => {
    /*if (a != Number || b != Number){
        return ("Non hai scritto un numero");
    }*/
    if (char == 's' || char == 'S'){
        return (sumar(a, b));
    } else{
        if (char == 'r' || char == 'R'){
            return (restar(a, b));
        } else {
            if (char == 'd' || char == 'D'){
                return (dividir(a,b));
            } else {
                if (char == 'm' || char == 'M'){
                    return (moltiplicar(a,b));
                } else {
                    return ("Scelta invalida");
                }
            }
        }
    }
}

(function main () {
    let nNum1 = Number(prompt("Dime primer numero", 12));
    let nNum2 = Number(prompt("Dime otro", 2));
    let richiesta = `Que operación quieres hacer?
                     's' = suma 'r' = resto 'd' = 'dividir 'm' = moltiplicar`;
    let sOperador = prompt(richiesta, 's');

    let rRespuesta = calculadora (nNum1, nNum2, sOperador);

    console.log(rRespuesta);
}) ();