"use strict";
/// <reference path="./Clases/Impares.ts"/>
/// <reference path="./Clases/ajax.ts"/>
function Funcion() {
    var impares = new Test.Impares(document.getElementById("txtNumero").value);
    alert(impares._numero);
    alert(impares.CalcularImpares());
}
//# sourceMappingURL=main.js.map