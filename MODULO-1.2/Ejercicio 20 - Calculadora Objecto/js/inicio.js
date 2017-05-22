var calculadora = {
    oDatox : {
        num1 : {
            valor : 0,
            msg : "Escribe un numero"
        },
        num2 : {
            valor : 0,
            msg : "Escribe otro"
        }
    },
    sOperacion : {
        valor : 's',
        msg : `Que operación quieres hacer?
    's' = suma 'r' = resto 'd' = 'dividir 'm' = moltiplicar`,
    },
    sRespuesta : {
        valor : "",
        aMsg : ["No has puesto dos numeros", "El resultado es: "]
    }, 
    // la funcion vive en el espacio esterior y el metodo dentro un objecto
    sumar : function (a, b) {
        return Number(a) + Number(b)
    },
    restar : function (a, b) {
        return a - b;
    },
    dividir : function (a, b) {
        return a / b;
    },
    moltiplicar : function (a, b) {
        return a * b;
    },
    imprimir : function () {
        if (isNaN(this.sRespuesta.valor)){
            console.log(this.sRespuesta.aMsg[0]);
        }else {
            console.log(this.sRespuesta.aMsg[1] + this.sRespuesta.valor);
        }
    },
    calcular : function (a=0, b=0, char) {
        let result = 0;
        switch (char) {
            case 's':
            case 'S':
            case '+':
                result = (this.sumar (a, b));
                break;
            case 'r':
            case 'R':
            case '-':
                result = (this.restar(a, b));
                break;
            case 'd':
            case 'D':
            case '/':
            case ':':
                result = (this.dividir(a,b));
                break;
            case 'm':
            case 'M':
            case '*':
            case 'x':
            case 'X':
                result = (this.moltiplicar(a,b));
                break;
            default:
                result = ("Scelta invalida");
                break;
        }

        return result;

    },
    // this tiene problemas con las funciones Arrow, así utilizo la funcion "antigua"
    start : function () {  
        this.oDatox.num1.valor = Number(prompt(this.oDatox.num1.msg));
        this.oDatox.num2.valor = Number(prompt(this.oDatox.num2.msg));
        this.sOperacion.valor = prompt(this.sOperacion.msg);

        this.sRespuesta.valor = this.calcular (this.oDatox.num1.valor, this.oDatox.num2.valor, this.sOperacion.valor);

        this.imprimir();
    }
}

calculadora.start ();