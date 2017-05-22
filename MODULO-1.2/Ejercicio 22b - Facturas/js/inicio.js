// Funcion constructora
function Factura (idFactura, idCliente) {
    this.empresa = {
        nombre : "Paperopoli",
        direccion : "calle de topolino 32",
        ciudad : "Mouseton",
        telefono : "+34652123456",
        nif : "A87654321K"
    };

    this.cliente = {
        nombre : "Paperon",
        apellido : "De Paperoni",
        direccion : "Gran via 123",
        ciudad : "Mouseton",
        telefono : "+34652987865",
        nif : "Y98765432G"
    };

    // como no se como se llamará el objecto y no tiene que ser por un objecto solo,
    // tengo que utilizar "this"
    this.idFactura = idFactura;
    this.idCliente = idCliente;

    // poner estas funciones aqui provocaría mucha redundancia por esto hay el Prototype
    /*this.muestraId = function () {
        alert("ID Factura: " + this.idFactura);
    }

    this.muestraCliente = function (){
        alert("ID Cliente: " + this.idCliente);
    }*/
}

Factura.prototype.muestraId = function () {
    alert("ID Factura: " + this.idFactura);
}

Factura.prototype.muestraCliente = function (){
    alert("ID Cliente: " + this.idCliente);
}

let f123 = new Factura ("123","A34");
let f124 = new Factura ("124", "B85");

f124.muestraId();
f124.muestraCliente();

console.log (f123);
console.log (f124);


var oResult = document.querySelector("#result");