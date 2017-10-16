"use strict";
//ARRAY.MAP
//#1.- SE QUIERE CALCULAR EL CUADRADO DE CADA ELEMENTO
var numeros = [1, 2, 3, 4, 5];
var cuadrados = [];
//a.- FORMA 'TRADICIONAL'
for (var i = 0; i < numeros.length; i++) {
    cuadrados[i] = numeros[i] * numeros[i];
}
console.log(cuadrados);
//b.- CON MAP
cuadrados = numeros.map(function (numero) {
    return numero * numero;
});
console.log(cuadrados);
//c.- CON MAP Y =>
cuadrados = numeros.map(function (numero) { return numero * numero; });
console.log(cuadrados);
//# sourceMappingURL=map.js.map