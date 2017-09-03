"use strict";
/// <reference path="Persona.ts" />
var Entidades;
(function (Entidades) {
    var Aula = /** @class */ (function () {
        function Aula(piso, numero) {
            this._piso = piso;
            this._numero = numero;
            this._listado = new Array();
        }
        Aula.prototype.ToString = function () {
            var retorno = "Piso: " + this._piso + "\nNumero de aula: " + this._numero + "\nIntegrantes" + "\n\n=============";
            for (var _i = 0, _a = this._listado; _i < _a.length; _i++) {
                var Persona_1 = _a[_i];
                retorno += Aula.MostrarListado(Persona_1);
            }
            //return "Piso: " + this._piso + "\nNumero de aula: " + this._numero + "\nIntegrantes" + "\n\n=============" + this._listado.forEach(Aula.MostrarListado);
            return retorno;
        };
        Aula.MostrarListado = function (objeto) {
            return objeto.ToString();
        };
        Aula.prototype.Agregar = function (persona) {
            this._listado.push(persona);
        };
        return Aula;
    }());
    Entidades.Aula = Aula;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=Aula.js.map