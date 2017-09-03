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
var Entidades;
(function (Entidades) {
    var Aula = /** @class */ (function () {
        function Aula(piso, numero) {
            this._piso = piso;
            this._numero = numero;
            this._listado = new Array();
        }
        Aula.prototype.ToString = function () {
            var retorno = "Piso: " + this._piso + "\nNumero de aula: " + this._numero + "\nIntegrantes" + "\n\n=============";
            for (var _i = 0, _a = this._listado; _i < _a.length; _i++) {
                var Persona_1 = _a[_i];
                retorno += Aula.MostrarListado(Persona_1);
            }
            //return "Piso: " + this._piso + "\nNumero de aula: " + this._numero + "\nIntegrantes" + "\n\n=============" + this._listado.forEach(Aula.MostrarListado);
        };
        Aula.MostrarListado = function (objeto) {
            return objeto.ToString();
        };
        Aula.prototype.Agregar = function (persona) {
            this._listado.push(persona);
        };
        return Aula;
    }());
    Entidades.Aula = Aula;
})(Entidades || (Entidades = {}));
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
var Entidades;
(function (Entidades) {
    var Profesor = /** @class */ (function (_super) {
        __extends(Profesor, _super);
        function Profesor(nombre, apellido, horario, titulo) {
            var _this = _super.call(this, nombre, apellido) || this;
            _this._horario = horario;
            _this._titulo = titulo;
            return _this;
        }
        Profesor.prototype.ToString = function () {
            return _super.prototype.ToString.call(this) + "\nhorario: " + this._horario + "\n _titulo: " + this._titulo;
        };
        return Profesor;
    }(Entidades.Persona));
    Entidades.Profesor = Profesor;
})(Entidades || (Entidades = {}));
var Entidades;
(function (Entidades) {
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
    }(Entidades.Persona));
    Entidades.Alumno = Alumno;
})(Entidades || (Entidades = {}));
