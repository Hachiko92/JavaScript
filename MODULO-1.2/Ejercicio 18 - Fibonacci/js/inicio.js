function fibonacci (fin) {
    let i = 0, j=1, aArray = [];
    while (fin > j) {
        j = j + i;
        i = j - i;
        aArray[aArray.length] = j; 
        console.log = aArray [aArray.length];
    }

    return (aArray)
}

(function main () {
    let nNum = Number(prompt("Cual es el maximo?", 12));

    let aRespuesta = fibonacci (nNum);

    imprimir (aRespuesta);
    
}) (); 

function imprimir (aResult) {
    let sStringa = "La serie es: ";

    for (i=0;aResult[i]!=0;i++){
        sStringa += aResult[i] + " ";
        console.log (aResult[i]);
    }

    alert(sStringa);
}

(function main () {
    let nNum = Number(prompt("Cual es el maximo?", 12));

    let aRespuesta = fibonacci (nNum);

    imprimir (aRespuesta);
    
}) (); 
