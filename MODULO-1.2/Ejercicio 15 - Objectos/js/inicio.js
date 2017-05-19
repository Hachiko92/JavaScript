
let oSample1 = {};
let oSample2 = new Object();

// de momento oSample1 y oSample2 son iguales

console.log(typeof oSample1);
console.log(typeof oSample2);

console.log(oSample1);
console.log(oSample2);

// en JS puedo dar cuantos valores quiero cuando quiero
oSample1.nombre = "";
oSample2.titulo = "";

oSample.oLibro = "";
/* hay que crear el objecto "oLibro" antes de inicializar un valor, JS tiene el 
   "limite" de no poder inicializar un valor de un objecto no creato 
   dentro un objecto */
oSample1.oLibro.titulo = "";

console.log(oSample1);
console.log(oSample2);

let aSample = [];
let aSample = new Array();