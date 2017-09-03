/// <reference path="./Entidades/Aula.ts" />
/// <reference path="./Entidades/Alumno.ts" />

var miAula : Entidades.Aula = new Entidades.Aula(5, 2);
var alumno : Entidades.Alumno = new Entidades.Alumno("fernando", "lareu", 3, 6 , 7);

miAula.Agregar(new Entidades.Alumno("fernando", "lareu", 3, 6 , 7));
console.log(miAula.ToString());

