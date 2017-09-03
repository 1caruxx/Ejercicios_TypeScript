"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }
    Persona.prototype.ToString = function () {
        return "Nombre: " + this._nombre + "\nApellido: " + this._apellido;
    };
    return Persona;
}());
exports.Persona = Persona;
//# sourceMappingURL=Persona.js.map