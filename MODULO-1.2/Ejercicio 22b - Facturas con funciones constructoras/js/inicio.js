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


// Estructura del objecto Factura creado mediante CONSTRUCTORES
function Cliente (nombre, apellido, direccion, ciudad, telefono, nif){
    this.nombre = nombre,
    this.apellido = apellido,
    this.direccion = direccion,
    this.ciudad = ciudad,
    this.telefono = telefono,
    this.nif = nif
}

function Item (descripcion, precio, cantidad) {
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = cantidad;
}

function FacturaFull (iva, formaPago) {
    //this.cliente = new Cliente ("Paperon","De Paperoni", "Gran via 123", "Mouseton", "+34652987865", "Y98765432G")
    this.cliente = {};
    this.datos = {
        tot : 0,
        iva : iva,
        pago: formaPago
    }
    this.elementos = [];
}

FacturaFull.prototype.empresa = {
    nombre : "Paperopoli",
    direccion : "calle de topolino 32",
    ciudad : "Mouseton",
    telefono : "+34652123456",
    nif : "A87654321K"
}

FacturaFull.prototype.muestraTotal = function () {

}

FacturaFull.prototype.totale = function (){

    for (i = 0 ; i<this.elementos.length; i++)
    {
        this.datos.tot += this.elementos[i].precio*this.elementos[i].cantidad;
    }
    console.log(this.datos.tot);
}

f01 = new FacturaFull (1.16, "contado");
f01.cliente = new Cliente ("Paperon","De Paperoni", "Gran via 123", "Mouseton", "+34652987865", "Y98765432G");

f01.elementos[f01.elementos.length] = new Item ("Boligrafos", 1, 30);
f01.elementos[f01.elementos.length] = new Item ("Libretas", 1.5, 10);
f01.elementos[f01.elementos.length] = new Item ("Calculadoras", 10, 2);
f01.elementos[f01.elementos.length] = new Item ("Mouse", 11.5, 5);

/* f01.elementos = [new Item ("Boligrafos", 1, 30),
                 new Item ("Libretas", 1.5, 10),
                 new Item ("Calculadoras", 10, 2),
                 new Item ("Mouse", 11.5, 5)]*/

console.log (f01);

FacturaFull.prototype.muestraDatos = function (){
		this.calculaTotal();
        sHTML = "";
		sHTML += "<p><b>Datos Empresa</b></p>";
		sHTML +="<ul>";
		for (i in this.empresa) {
		    sHTML +="<li><span class=Cap>" + i + "</span>: " + this.empresa[i] + "</li>";
		}
		sHTML +="</ul>";
		
		sHTML +="<p><b>Datos Cliente</b></p>";
		sHTML +="<ul>";
		for (i in this.cliente) {
		    sHTML +="<li><span class=Cap>" + i + "</span>: " + this.cliente[i] + "</li>";
		}
		sHTML +="</ul>";
				
		sHTML +="<p><b>Lista de elementos</b></p>";
		sHTML +="<ul class=elementos>";
		sHTML +="<li class=elementos>Descripcion</li>";
		sHTML +="<li class=elementos>Cantidad</li>";
		sHTML +="<li class=elementos>Precio</li>";
		sHTML +="</ul>";
		for(var i=0; i<this.elementos.length; i++){
		    sHTML +="<ul class=elementos>";
		    for (j in this.elementos[i]) {
		        sHTML +="<li class=elementos>" + this.elementos[i][j] + "</li>";
		    }
			//sHTML +="<li class=elementos>" + this.elementos[i].descripcion+"</li>";
			//sHTML +="<li class=elementos>" + this.elementos[i].cantidad+"</li>";
			//sHTML +="<li class=elementos>" + this.elementos[i].precio+"</li>";
			sHTML +="</ul>";
		};
		sHTML +="<p><b>Total a pagar</b></p>";
		sHTML +="<ul>";
		sHTML +="<li>Importe Total: " + this.informacion.total.toFixed(2)+"</li>";
		sHTML +="<li>Iva: "+ this.informacion.iva+"</li>";
		sHTML +="<li>Pago: "+ this.informacion.formaPago+"</li>";
		sHTML +="</ul>";

	return sHTML;
	};

var oResult = document.querySelector("#result");
