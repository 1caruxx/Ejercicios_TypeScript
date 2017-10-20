"use strict";
var Entidades;
(function (Entidades) {
    var Vehiculo = /** @class */ (function () {
        function Vehiculo(marca, patente, precio) {
            this.marca = marca;
            this.patente = patente;
            this.precio = precio;
        }
        Vehiculo.prototype.ToString = function () {
            return "{\"marca\":\"" + this.marca + "\" , \"patente\":\"" + this.patente + "\" , \"precio\":" + this.precio + "}";
        };
        return Vehiculo;
    }());
    Entidades.Vehiculo = Vehiculo;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=Vehiculo.js.map