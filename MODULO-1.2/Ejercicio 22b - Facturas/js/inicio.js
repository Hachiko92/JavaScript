// Funcion constructora
function Factura (idFactura, idCliente) {
    // como no se como se llamará el objecto y no tiene que ser por un objecto solo,
    // tengo que utilizar "this"
    this.idFactura = idFactura;
    this.idCliente = idCliente;
}

let f123 = new Factura ("123","A34");
let f124 = new Factura ("124", "B85");

console.log (f123);
console.log (f124);


var oResult = document.querySelector("#result");
