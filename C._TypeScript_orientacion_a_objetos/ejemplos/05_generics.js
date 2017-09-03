"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _02_herencia_1 = require("./02_herencia");
var vehiculos = [new _02_herencia_1.Auto("ROJO", 125000, "FERRARI"), new _02_herencia_1.Auto("AMARILLO", 200000, "SEAT")];
vehiculos.forEach(Mostrar);
function Mostrar(v) {
    console.log(v.Mostrar());
}
//# sourceMappingURL=05_generics.js.map