"use strict";
//LAS SIGUIENTES FUNCIONES SON EQUIVALENTES. 
var f1 = function (i) { return i * i; };
console.log(f1(2));
//EL TIPO DE RETORNO ES INFERIDO POR EL COMPILADOR
var f2 = function (i) { return i * i; };
console.log(f2(2));
//SINTAXIS DE "Fat arrow"
var f3 = function (i) { return i * i; };
console.log(f3(2));
//SINTAXIS DE "Fat arrow" CON TIPO DE RETORNO INFERIDO
var f4 = function (i) { return i * i; };
console.log(f4(2));
//SINTAXIS DE "Fat arrow" CON TIPO DE RETORNO INFERIDO,
//SI NO TIENE LLAVES({}) NO NECESITA 'RETURN'
var f5 = function (i) { return i * i; };
console.log(f5(2));
//# sourceMappingURL=04_fatArrow.js.map