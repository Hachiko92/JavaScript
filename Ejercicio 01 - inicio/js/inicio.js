/* constantes */

// la buena practica es poner los textos en constantes 
// tambien por facilidar una sucesiva traduccion
// las constantes se escriben mayusculas
//const SALUDO = 'Hola ';
const SALUDO = 'Hello ';

/* variabiles */

// Acceso al Node del button1 del DOM 
var oButton1 = document.querySelector("#button1");

// Acceso al Node del nombre del DOM 
var oNombre = document.querySelector("#nombre");

// Acceso al Node de la respuesta del DOM
var oRespuesta = document.querySelector("#respuesta");

var numero = 12;
var stringa = "Stringa 'comilla simple'";
var stringa2 = 'Stringa "comilla doble"';

/* interpolacion */
// sGrupo no va a conservar la variable si no su contenido
// entre comilla francesa (gracias a ES6)
// var sGrupo = `&{stringa} & &{stringa2}`
var sGrupo = `<ul>
                <li>${stringa}</li>
                <li>${stringa2}</li>
              </ul>`

// alert lo pongo entre comillas porque si no se dispara
// a la apertura de la pagina
// oButton1.onclick = "alert('Hola')";

// declaro la funcion "saludar"
function saludar() {
    /* let sNombre = oNombre.value;
       alert(SALUDO + sNombre + '!');*/

    let sSaludo = SALUDO;
    sSaludo += oNombre.value;


    oRespuesta.innerHTML = "<strong>" + sSaludo + "</strong>";
    oRespuesta.innerHTML += sGrupo;
    //alert(sSaludo);
}

oButton1.onclick = saludar;


// ';' es opcional, es mehor ponerla pero el sistema le reconoce
console.dir(oButton1);
console.dir(oNombre);
console.dir(oRespuesta);