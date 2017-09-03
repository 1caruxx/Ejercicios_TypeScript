import {Aula} from "./Aula";
import {Alumno} from "./Alumno";
import {Persona} from "./Persona";

var miAula : Aula = new Aula(5, 2);
var alumno : Alumno = new Alumno("fernando", "lareu", 3, 6 , 7);


miAula.Agregar(alumno);
console.log(miAula.ToString());

