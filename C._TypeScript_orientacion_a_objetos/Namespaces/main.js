"use strict";
/// <reference path="./Entidades/Aula.ts" />
/// <reference path="./Entidades/Alumno.ts" />
var miAula = new Entidades.Aula(5, 2);
var alumno = new Entidades.Alumno("fernando", "lareu", 3, 6, 7);
miAula.Agregar(new Entidades.Alumno("fernando", "lareu", 3, 6, 7));
console.log(miAula.ToString());
//# sourceMappingURL=main.js.map