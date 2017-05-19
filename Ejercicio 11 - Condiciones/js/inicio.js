/* ***** Functiones ***** */
(function main () {
    let nNum1 = 0;
    let nNum2 = 0;

    let compruebaEdad = (a) => {
        if (a < 18) {
            return ("Hola chaval!");
        } else if (a < 50) {
            return ("Hola amigo");
        } else {
            return ("Buenos dias");
        }
    }

    nNum1 = Number(prompt("Dime tu edad", 12));

    let rRespuesta = compruebaEdad (nNum1);

    console.log(rRespuesta);
}) ();