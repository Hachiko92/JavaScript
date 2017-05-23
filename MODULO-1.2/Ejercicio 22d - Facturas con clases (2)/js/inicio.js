// Clases tal como aparecen en ES6

// Las clases al final son funciones Constructoras, 
// por esto la definimos con la primer letra mayuscola
class Cliente {
    // la funcion constructor se exejuta automaticamente al llamar la funcion
    constructor (nombre, apellido, direccion, ciudad, telefono, nif) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.direccion = direccion,
        this.ciudad = ciudad,
        this.telefono = telefono,
        this.nif = nif 
    }
}

xCli = new Cliente ("Paperon","De Paperoni", "Gran via 123", "Mouseton", "+34652987865", "Y98765432G");

// la llamo ClienteOld porque no se puede llamar como la clase
function ClienteOld (nombre, apellido, direccion, ciudad, telefono, nif){
    this.nombre = nombre,
    this.apellido = apellido,
    this.direccion = direccion,
    this.ciudad = ciudad,
    this.telefono = telefono,
    this.nif = nif
}

class Item{
    constructor (descripcion, precio, cantidad) {
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

function ItemOld (descripcion, precio, cantidad) {
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = cantidad;
}

class Factura {
    constructor (iva, formaPago) {
        this.cliente = {};
        this.datos = {
            tot : 0,
            iva : iva,
            pago: formaPago
        }
        this.elementos = [];
    }
}

function FacturaOld (iva, formaPago) {
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


class FacturaET extends Factura {
    constructor () {
        this.empresa = {
            nombre: "Ediciones Tuatalug",
            direccion: "calle libreros, 23",
            telefono: "900456456",
            nif: "X34567894"
        }
    }

    sacarFormatoExtra () {

    }
}


// extende se puede utilizar para modificar los metodos de la clase padre
class FacturaEES extends Factura {
    constructor () {
        this.empresa = {
            nombre: "Ediciones El Sol",
            direccion: "calle sassi sgonfi, 76",
            telefono: "900101928",
            nif: "X28439434"
        }
    }
}

var oResult = document.querySelector("#result");

oResult.innerHTML = f01.muestraDatos();