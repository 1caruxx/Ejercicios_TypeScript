"use strict";
function Funcion1() {
    return 5;
}
var Funcion2 = function () { return 1 * 5; };
var Funcion3 = function (numero) { return numero; };
var Funcion4 = function (numero, numero2) { return numero * numero2; };
var Funcion5 = function (numero) {
    if (numero == 2) {
        return numero;
    }
    else {
        return "Numero incorrecto";
    }
};
var Funcion6 = Funcion5;
var Funcion7 = function (numero) {
    return numero;
};
console.log(Funcion1());
console.log(Funcion2());
console.log(Funcion3(5));
console.log(Funcion4(1, 5));
console.log(Funcion5(3));
console.log(Funcion6(2));
// Si a una funcion que en su firma exije que se le pase un valor como parametro la asigno a una variable y en su llamado no le paso ningun valor, no provocara un error en tiempo de compilacion.
console.log(Funcion7());
//# sourceMappingURL=main.js.map