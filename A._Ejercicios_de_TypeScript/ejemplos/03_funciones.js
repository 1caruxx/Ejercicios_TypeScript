"use strict";
//FUNCIONES BASICAS
function Sumar(a, b) {
    return a + b;
}
function Saludar(nombre) {
    return "Hola " + nombre;
}
function Despedir() {
    console.log("Chau!");
}
//************************************************************************************************/
//FUNCIONES COMO VARIABLES
var miFuncion = Sumar;
console.log(miFuncion(5, 5));
//miFuncion = Saludar;
//console.log(miFuncion("Juan"));
var miVariable = function () {
    console.log("hola");
};
miVariable();
var varDespedir = Despedir();
//console.log(varDespedir())
var miOtraFuncion = Saludar;
console.log(miOtraFuncion("Juan"));
//************************************************************************************************/
//************************************************************************************************/
//PARAMETROS OPCIONALES
//En JavaScript todos los parametros son opcionales ver el ejemplo en el navegador
function NombreApellido(nombre, apellido) {
    if (apellido) {
        return nombre + ' ' + apellido;
    }
    else {
        return nombre;
    }
}
var nombre = NombreApellido("Juan", "Perez");
var otroNombre = NombreApellido("Juan");
console.log(nombre);
console.log(otroNombre);
//************************************************************************************************/
//************************************************************************************************/
//PARAMETROS PREDETERMINADOS
function GenerarNombreCompleto(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = false; }
    var cadena;
    if (capitalizado)
        cadena = Capitalizar(nombre) + " " + Capitalizar(apellido);
    else
        cadena = nombre + ' ' + apellido;
    return cadena;
}
function Capitalizar(cadena) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1).toLowerCase();
}
console.log(GenerarNombreCompleto("tony", "stark", true));
//************************************************************************************************/
//************************************************************************************************/
//PARAMETROS REST
function CompletarNombreApellido(nombre) {
    var losDemasParametros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        losDemasParametros[_i - 1] = arguments[_i];
    }
    return nombre + " " + losDemasParametros.join(" ");
}
var superman = CompletarNombreApellido("Clark", "Joseph", "Kent");
var ironman = CompletarNombreApellido("Anthony", "Edward", "Tony", "Stark");
console.log(superman);
console.log(ironman);
function Sobrecargar(a) {
    console.log(typeof (a));
}
Sobrecargar("cadena");
Sobrecargar(123);
Sobrecargar(true);
//# sourceMappingURL=03_funciones.js.map