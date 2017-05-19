// ***** funciones *****

// el atributo del objecto tiene que llamarse igual que fuera
function sumarObjectos (a = {valor: 0}, b = {valor: 0}) {
    a.valor *= 2;
    b.valor *= 2;

    return a.valor + b.valor;
}

/* le paso el valor de la propiedad del objecto así que en este caso el
   objecto no cambia, porque no le paso una referencia*/
function sumarDobles (a, b) {
    a *= 2;
    b *= 2;

    return a + b;
}

function main () {
    let oNum1 = {valor: 0};
    let oNum2 = {valor: 0};

    oNum1.valor = Number(prompt("Dime un número", 12));
    oNum2.valor = Number(prompt("Dime otro", 6));

    console.log(oNum1);
    console.log(oNum2);

    //console.log(sumarObjectos(oNum1, oNum2));
    console.log(sumarDobles(oNum1.valor, oNum2.valor));

    /* con sumarDobles la consola va a imprimir oNum1 y oNum2 como eran en principio
       porque en sumarDobles paso un valor y no todo el objecto */
    console.log(oNum1);
    console.log(oNum2);
}

// Invocación de la función
main();