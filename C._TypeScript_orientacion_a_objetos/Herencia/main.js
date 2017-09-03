"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Aula_1 = require("./Aula");
var Alumno_1 = require("./Alumno");
var miAula = new Aula_1.Aula(5, 2);
var alumno = new Alumno_1.Alumno("fernando", "lareu", 3, 6, 7);
miAula.Agregar(alumno);
console.log(miAula.ToString());
//# sourceMappingURL=main.js.map