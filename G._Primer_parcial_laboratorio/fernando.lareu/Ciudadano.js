"use strict";
/// <reference path="./Persona.ts"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Entidades;
(function (Entidades) {
    var Ciudadano = /** @class */ (function (_super) {
        __extends(Ciudadano, _super);
        function Ciudadano(nombre, apellido, edad, dni, pais, foto) {
            var _this = _super.call(this, nombre, apellido, edad) || this;
            _this.dni = dni;
            _this.pais = pais;
            if (foto && foto != "") {
                _this.foto = foto;
            }
            return _this;
        }
        Ciudadano.prototype.ToString = function () {
            return "{\"datosPersonales\" : " + _super.prototype.ToString.call(this) + " , \"datosCiviles\" : {\"dni\" : " + this.dni + "} , \"pais\" : " + this.pais + " , \"foto\" : " + this.foto + "}}";
        };
        return Ciudadano;
    }(Entidades.Persona));
    Entidades.Ciudadano = Ciudadano;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=Ciudadano.js.map