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