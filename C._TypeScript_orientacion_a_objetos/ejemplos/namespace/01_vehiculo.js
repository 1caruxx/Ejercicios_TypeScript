var Test;
(function (Test) {
    var Vehiculo = (function () {
        function Vehiculo(marca) {
            this._marca = marca;
        }
        Vehiculo.prototype.Mostrar = function () {
            return this._marca;
        };
        return Vehiculo;
    }());
    Test.Vehiculo = Vehiculo;
})(Test || (Test = {}));
//# sourceMappingURL=01_vehiculo.js.map