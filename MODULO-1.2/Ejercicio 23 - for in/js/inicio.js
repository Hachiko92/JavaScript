var oVolo = {
    airline: "Oceanic",
    number: "815",
    departure: "Sydney",
    arrival: "Los Angeles",
    // metodo
    mostrar: function () {
        // this es oVolo, puedo poner oVolo pero es mas elegante poner this
        // key no es un indice cada vez asume el valor de una variable dentro el objecto
        // (ailine, number, departure... )
        for (let key in this) {
            if (typeof this[key] != "function"){
                console.log(key.toUpperCase() + ": " + this[key]);
            }
        }
    }
}

// llamada del metodo
//oVolo.mostrar();

var oVuelo = {
    aerolinea: "Oceanic",
    numero: "815",
    salida: {
        claveIATA: "SYD",
        tiempo: new Date(2004,09,22,14,55),
        ciudad: "Sydney"
    },
    llegada: {
        claveIATA: "LAX",
        tiempo: new Date (2004,09,23,10,42),
        ciudad: "Los Angeles"
    },
    mostrar: function () {
        for (let key in this) {
            if (typeof this[key] == "function"){
                continue;
            } 
            else{
                if (typeof this[key] == "object") {
                    for (var key2 in this[key]) {
                        console.log(key.toUpperCase() + " / " + key2.toUpperCase() + ": " + this[key][key2]);
                    }
                }
                else {
                    console.log(key.toUpperCase() + ": " + this[key]);
                }
            }
        }
    }
}

oVuelo.mostrar();

/* Notacion por puntos y notaciones por corchetes y comillas */

// sin "" aerolinea la intiende como una variable
//console.log(oVuelo[aerolinea]);
// son dos modos de escribir la misma cosa
console.log(oVuelo["aerolinea"]);
console.log(oVuelo.aerolinea);

console.log(oVuelo.salida.ciudad);
console.log(oVuelo["salida"]["ciudad"]);

let a = "aerolinea";
console.log(oVuelo[a]);

let b = "salida";
let c = "ciudad";
console.log(oVuelo[b][c]);


