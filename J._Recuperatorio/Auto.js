"use strict";
/// <reference path="./Vehiculo.ts"/>
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
    var Auto = /** @class */ (function (_super) {
        __extends(Auto, _super);
        function Auto(marca, patente, precio, color, foto) {
            var _this = _super.call(this, marca, patente, precio) || this;
            _this.color = color;
            if (foto != "" && foto) {
                _this.foto = foto;
            }
            return _this;
        }
        Auto.prototype.ToJSON = function () {
            return "{\"datos\":" + _super.prototype.ToString.call(this) + " , \"estetica\":{\"foto\":\"" + this.foto + "\" , \"color\":\"" + this.color + "\"}}";
        };
        return Auto;
    }(Entidades.Vehiculo));
    Entidades.Auto = Auto;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=Auto.js.map