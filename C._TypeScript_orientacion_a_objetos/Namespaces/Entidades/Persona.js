"use strict";
var Entidades;
(function (Entidades) {
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
    Entidades.Persona = Persona;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=Persona.js.map