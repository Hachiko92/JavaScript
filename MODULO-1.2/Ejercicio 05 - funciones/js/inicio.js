// Declaracion de una funcion
// function sumar () {}

// Si la funcion no la invoco en la consola no aparece "Hola"
function saludar () {
    let sSaludo = "Hola";
    console.log(sSaludo);
}

function sumarDosNumeros (a, b) {
    // Prompt amanece siempre string por esto "return a + b;" no funciona
    // return +a + +b;
    // con Number es preferible
    return Number(a) + Number(b)
}

function restarDosNumeros (a, b) {
    return a - b;
}

function dividirDosNumeros (a, b) {
    return a / b;
}

function moltiplicarDosNumeros (a, b) {
    return a * b;
}

function main () {
    /*  podria hacer un cast a number cuando guardo el numero, pero como no lo
        necesito para todas las operaciones lo voy a hacer solo donde lo necesito 
        (los numeros ocupan mucho mas espacio en memoria) */
    // let nNum1 = Number(prompt("Dime un número"));
    let nNum1 = prompt("Dime un número", 12);
    let nNum2 = prompt("Dime otro", 6);

    console.log (sumarDosNumeros (nNum1, nNum2));
    console.log (restarDosNumeros(nNum1, nNum2));
    console.log (restarDosNumeros(nNum2, nNum1));
    console.log (dividirDosNumeros(nNum1, nNum2));
    console.log (moltiplicarDosNumeros(nNum1, nNum2));
    // lo que existe fuera tambien existe dentro (no lo contrario) 
    saludar ();
    // puedo incapsular funciones dentro funciones
}

// Invocación de la función
// saludar();
main();

// No puede funcionar porque la varible sSaludo fuera de la funcion saludar no existe
// console.log(sSaludo);