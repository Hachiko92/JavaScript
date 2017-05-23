var sString1 = "Pepe 'El lebrijano'";
var sString2 = "Juan 'El Habichuela'";

oString2 = new String (sString2);

// toUpperCase y toLowerCase son objectos involvientes
console.log(sString1.toUpperCase());
console.log(sString2.toLowerCase());
console.log(oString2);

let twoString = sString1.concat(sString2);

console.log(twoString);

// split me crea un array creado a traves de una stringa y separa cada elemento
// por lo que pongo entre ("")
let aPalabras = twoString.split(" ");

let newCadena = aPalabras.join(" ")

console.log(String.fromCharCode(67));

console.log(aPalabras)
console.log(newCadena)

//console.log(math.random());
// si los quiero entre el 0 y el 99:
console.log(parseInt(Math.random()*100));
// si los quiero entre el 0 y el 9:
console.log(parseInt(Math.random()*10));

let n = Math.random()*100;
console.log("Numero casual: " + n);
console.log("ceil: " + Math.ceil(n));
console.log("round: " + Math.round(n));
console.log("floor: " + Math.floor(n));

let aPoints = [40,100,1,5,25,10];
// por hacer una copia de verdad de un Array

let aPointsCopia = [];

for (var i = 0; i < aPoints.length ; i++){
    aPointsCopia[i] = aPoints[i];
}

aPoints.sort();
console.log("Array ordenado alfabeticamente [40,100,1,5,25,10] => " + aPoints);

aPoints.sort(function (a,b) {
    return (a-b);
})
console.log("Array ordenado numericamente [40,100,1,5,25,10] => " + aPoints);

aPoints.sort(function (a,b) {
    return (b-a);
})
console.log("Array ordenado al réves numericamente [40,100,1,5,25,10] => " + aPoints);
console.log("Copia del array inicial: [" + aPointsCopia + "]");
