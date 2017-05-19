// ***** variables *****
var sName = "Funciones";

// ***** funciones *****

function main () {
        // var sMain = "Funcion Main";
        // se imprime sName de la funcion y sName global (cuando está llamada fuera)
        // var sName = "Funcion Main"
        // como no creo una nueva variable se modifica sName Globale
        sName = "Funcion Main";
        console.log (sName);
}

// Invocación de la función
main();

// sMain no existe fuera de la funcion
// console.log(sMain);

console.log(sName);