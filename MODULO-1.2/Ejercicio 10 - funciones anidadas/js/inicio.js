/* ***** Functiones ***** */
(function main () {
    let nNum1 = Number(prompt("Dime un número", 12));
    let nNum2 = Number(prompt("Dime otro", 2));

    let sumar = (a,b) => {
        return (+a + +b);
    }
    
    let sumarDobles = (a, b) => {
        a *= 2;
        b *= 2;

        return a + b;
    }
    
    let restar = (a, b) => {
        return (a - b);
    }

    
    let nResultSuma = sumar (nNum1, nNum2);
    let nResultSumaDoble = sumarDobles(nNum1, nNum2);
    let nResultResta = restar (nNum1, nNum2);

    console.log(nResultSuma);
    console.log(nResultSumaDoble);
    console.log(nResultResta);
// el (); final es lo que la hace autoinvocar, clousure
// https://www.w3schools.com/js/js_function_closures.asp
}) ();