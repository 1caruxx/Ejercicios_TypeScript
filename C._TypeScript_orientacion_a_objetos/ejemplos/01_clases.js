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
    Auto.MetodoEstatico = function () {
        console.log("Método esático");
    };
    return Auto;
}());
exports.Auto = Auto;
//# sourceMappingURL=01_clases.js.map