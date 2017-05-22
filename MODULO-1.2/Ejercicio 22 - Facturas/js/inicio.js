// objecto
let oFactura = {
    empresa : {
        nombre : "Paperopoli",
        direccion : "calle de topolino 32",
        ciudad : "Mouseton",
        telefono : "+34652123456",
        nif : "A87654321K"
    },
    cliente : {
        nombre : "Paperon",
        apellido : "De Paperoni",
        direccion : "Gran via 123",
        ciudad : "Mouseton",
        telefono : "+34652987865",
        nif : "Y98765432G"
    },
    elementos : [
        {descripcion: "Boligrafos", precio: 1, cantidad: 30},
        {descripcion: "Libretas", precio: 1.5, cantidad: 10},
        {descripcion: "Calculadoras", precio: 10, cantidad: 2},
        {descripcion: "Mouse", precio: 11.5, cantidad: 5}
    ],
    datos : {
        tot : 0,
        iva : 1.21,
        pago: "contados"
    },
    totale : function (){

        for (i = 0 ; i<this.elementos.length; i++)
        {
            this.datos.tot += this.elementos[i].precio*this.elementos[i].cantidad;
        }
        console.log(this.datos.tot);
    } 
}
// metodo

oFactura.totale();
