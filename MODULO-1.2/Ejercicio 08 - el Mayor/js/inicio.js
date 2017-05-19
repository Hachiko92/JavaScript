// ***** funciones *****

function mayor (){
    let nResult = 0;

    for (var i=0; i < arguments.length ; i++)
        if (nResult < arguments[i])
            nResult = arguments[i];

    return nResult;
}


function main () {
        console.log(mayor (12, 62, 7, 112, 6));
}

// Invocación de la función
main();