"use strict";
var Entidades;
(function (Entidades) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, apellido, edad) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
        }
        Persona.prototype.ToJSON = function () {
            /*
             * El equivalente seria return `{"nombre":"${this.nombre}" , "apellido":"${this.apellido}" , "edad":${this.edad}}`
             * No puede haber llaves que no correspondan.
             */
            return JSON.stringify(this);
        };
        return Persona;
    }());
    Entidades.Persona = Persona;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=Persona.js.map