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
    // como una funcion es un objecto no hay problemas a ponerla
    mostrar: () => {
        console.log(oVuelo);
    }
}

// metodo
oVuelo.mostrar();

