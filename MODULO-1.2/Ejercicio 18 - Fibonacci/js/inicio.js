function fibonacci (fin) {
    let i = 0, j=1, aArray = [];
    while (fin >= j) {
        j = j + i;
        i = j - i;
        if (j <= fin){
            aArray[aArray.length] = j; 
        }
        console.log = aArray [aArray.length];
    }

    aArray.toString();

    return (aArray)
}

(function main () {
    let nNum = Number(prompt("Cual es el maximo?", 12));

    let aRespuesta = fibonacci (nNum);

    imprimir (aRespuesta);
    
}) (); 

function imprimir (sResult) {
    let sStringa = "La serie es: ";

    alert(sStringa + sResult);
}

(function main () {
    let nNum = Number(prompt("Cual es el maximo?", 12));

    let sRespuesta = fibonacci (nNum);

    imprimir (sRespuesta);
    
}) (); 
