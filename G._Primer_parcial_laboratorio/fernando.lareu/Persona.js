"use strict";
var Entidades;
(function (Entidades) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, apellido, edad) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
        }
        Persona.prototype.ToString = function () {
            return "{\"nombre\" : " + this.nombre + "} , \"apellido\" : " + this.apellido + " , \"edad\" : " + this.edad + "}";
        };
        return Persona;
    }());
    Entidades.Persona = Persona;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=Persona.js.map