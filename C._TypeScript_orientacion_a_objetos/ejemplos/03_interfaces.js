"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Auto = (function () {
    function Auto(color, precio) {
        this._precio = precio;
        this.color = color;
    }
    Auto.prototype.GetPrecio = function () {
        return this._precio;
    };
    Auto.prototype.GetColor = function () {
        return this.color;
    };
    Auto.prototype.SetColor = function (color) {
        this.color = color;
    };
    return Auto;
}());
exports.Auto = Auto;
//# sourceMappingURL=03_interfaces.js.map