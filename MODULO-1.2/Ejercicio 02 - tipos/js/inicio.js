/* constantes */

//const SALUDO = 'Hola ';
const SALUDO = 'Hello ';

/* variabiles y tipos de datos */

// Number
var nEdad = 12;
// String
var sStringa = "Stringa 'comilla simple'";
var sStringa2 = 'Stringa "comilla doble"';
// Boolean
var esBueno = true;
var esMalo = false;
// Undefined
var queSoy;
// Null (Object Undefined)
var oDatos = {}
/* Objecto almacen o dato completo
// tipo jason */ 
var oDatos = {
    nombre: 'Pepe',
    apellido: 'Pérez',
    edad: 23,
    nacionalidad: 'Suiza',
    /* normalmente se pone un undefined dentro un objecto 
       pero se puede hacer
       algo: undefined, */
    oDireccion : {
        calle : "",
        numero : "",
        poblacion : "",
        cp : "",
        pais : ""
    }
}

console.info("Variables");
console.dir(nEdad);
console.dir(sStringa);
console.dir(oDatos);

sStringa = '';
/* oDatos en console lo veré modificado tambien en 
   el primer console.dir */
oDatos.oDireccion.calle = 'Calle del Pez'

console.info("Tipos");
console.dir(typeof nEdad);
console.dir(typeof sStringa);
console.dir(typeof oDatos);
console.dir(typeof esBueno);
console.dir(typeof queSoy);

