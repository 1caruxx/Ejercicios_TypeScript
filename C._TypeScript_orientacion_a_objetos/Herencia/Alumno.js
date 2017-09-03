"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = require("./Persona");
var Alumno = /** @class */ (function (_super) {
    __extends(Alumno, _super);
    function Alumno(nombre, apellido, legajo, matriz, nota) {
        var _this = _super.call(this, nombre, apellido) || this;
        _this._legajo = legajo;
        _this._matriz = matriz;
        _this._nota = nota;
        return _this;
    }
    Alumno.prototype.ToString = function () {
        return _super.prototype.ToString.call(this) + "\nLegajo: " + this._legajo + "\nMatriz: " + this._matriz + "Nota: " + this._nota;
    };
    return Alumno;
}(Persona_1.Persona));
exports.Alumno = Alumno;
//# sourceMappingURL=Alumno.js.map