// ***** funciones *****

function primeros (){
    let sStringa = "Numeros primeros: 1,2,";
    let aArray = [];
    let control = 0, control2 = 0, contator = 0;
    for (i = 3 ; i <= 100 ; i++){
        for (j= i-1 ; j>1 ; j--){
            if ((i%j) != 0){
                control = -10;
            }
            else {
                control2 = 5;
            }
        }
        if ((control == -10) && (control2 != 5))
        {
            aArray[contator] = i;
            contator++;
        }
        control, control2 = 0;
    }

    aArray.toString();

    sStringa = sStringa.concat(aArray);

    alert(sStringa);

    return sStringa;
}


function main () {
        console.log(primeros());
}

// Invocación de la función
main();