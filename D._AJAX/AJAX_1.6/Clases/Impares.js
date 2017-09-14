"use strict";
/// <reference path="./ajax.ts"/>
var Test;
(function (Test) {
    var Impares = /** @class */ (function () {
        function Impares(numero) {
            this._numero = numero;
            this._ajax = new Test.Ajax();
            this._esNumero = this.ValidarNumero(this._numero);
        }
        Impares.prototype.CalcularImpares = function () {
            if (this._esNumero) {
                this._ajax.Get("./admin.php", this.Sucess, "txtValor=" + this._numero, this.Error);
            }
            else {
                return "Valor ingresado no valido.";
            }
        };
        Impares.prototype.Sucess = function () {
            //(<HTMLInputElement>document.getElementById("txtImpares")).value = (this._ajax.GetXHR()).responseText;
            //return (this._ajax.GetXHR()).responseText;
            return "llegue";
        };
        Impares.prototype.Error = function () {
            return "Ups... algo salio mal. Status: " + this._ajax.GetXHR().status + " ReadyState: " + (this._ajax.GetXHR()).readyState;
        };
        Impares.prototype.ValidarNumero = function (numero) {
            for (var i = 0; i < numero.length; i++) {
                if (isNaN(parseInt(numero.charAt(i)))) {
                    return false;
                }
            }
            return true;
        };
        return Impares;
    }());
    Test.Impares = Impares;
})(Test || (Test = {}));
//# sourceMappingURL=Impares.js.map