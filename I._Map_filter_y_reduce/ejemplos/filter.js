"use strict";
//ARRAY.FILTER
//#1.- SE QUIERE OBTENER TODOS LOS IMPARES
var valores = [1, 2, 3, 4, 5];
var impares = [];
//a.- FORMA 'TRADICIONAL'
var cont = 0;
for (var i = 0; i < valores.length; i++) {
    if (valores[i] % 2 === 1) {
        impares[cont] = valores[i];
        cont++;
    }
}
console.log(impares);
//b.- CON FILTER
impares = valores.filter(function (numero) {
    return numero % 2 === 1;
});
console.log(impares);
//c.- CON FILTER Y =>
impares = valores.filter(function (numero) { return numero % 2 === 1; });
console.log(impares);
//# sourceMappingURL=filter.js.map