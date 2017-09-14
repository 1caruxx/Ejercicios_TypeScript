/// <reference path="./Clases/Impares.ts"/>
/// <reference path="./Clases/ajax.ts"/>

function Funcion() {

    var impares : Test.Impares = new Test.Impares((<HTMLInputElement>document.getElementById("txtNumero")).value);
    alert(impares._numero);
    alert(impares.CalcularImpares());
}