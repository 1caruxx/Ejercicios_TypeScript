"use strict";
var Entidades;
(function (Entidades) {
    var Usuario = /** @class */ (function () {
        function Usuario(nombre, apellido, mail, contrasenia) {
            this._nombre = nombre;
            this._apellido = apellido;
            this._mail = mail;
            this._contrasenia = contrasenia;
        }
        Usuario.prototype.ToJSON = function () {
            return JSON.stringify(this);
        };
        return Usuario;
    }());
    Entidades.Usuario = Usuario;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=Usuario.js.map