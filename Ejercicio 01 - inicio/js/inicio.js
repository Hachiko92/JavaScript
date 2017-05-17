/* constantes */

// la buena practica es poner los textos en constantes 
// tambien por facilidar una sucesiva traduccion
// las constantes se escriben mayusculas
//const SALUDO = 'Hola ';
const SALUDO = 'Hello ';

/* variabiles */
// normalmente son declarada en la function misma

// Acceso al Node del button1 del DOM 
var oButton1 = document.querySelector("#button1");
// Acceso al Node del nombre del DOM 
var oNombre = document.querySelector("#nombre");
// Acceso al Node de la respuesta del DOM
var oRespuesta = document.querySelector("#respuesta");
// Acceso al Node de la edad del DOM
var oEdad = document.querySelector("#edad");

var numero = 12;
var stringa = "Stringa 'comilla simple'";
var stringa2 = 'Stringa "comilla doble"';

// true y false son las unica cosas que se pueden escribir mayuscolas o no
var esBueno = true;
var esMalo = false;

// undefined
var queSoy;

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
    let nEdad = oEdad.value;
    sSaludo += oNombre.value;


    oRespuesta.innerHTML = "<strong>" + sSaludo + "</strong>";
    oRespuesta.innerHTML += sGrupo;
    // nEdad + 2 convierte el numero en texto porque el '+' es
    // ambiguo y piensa que sea una conquetacion
    // poniendo un '+' adelante lo va a considerar como numero
    oRespuesta.innerHTML += +nEdad+2;
    //alert(sSaludo);
}

oButton1.onclick = saludar;


// ';' es opcional, es mehor ponerla pero el sistema le reconoce
console.dir(oButton1);
console.dir(oNombre);
console.dir(oRespuesta);
console.log(nEdad);