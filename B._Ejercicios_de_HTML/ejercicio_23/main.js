"use strict";
function Calcular() {
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;
    var email = document.getElementById("emlMail").value;
    var salario = ObtenerCoeficiente();
    console.log("Nombre: " + nombre + "\nApellido: " + apellido + "\nemail: " + email + "\nSueldo mensual> " + salario);
    document.getElementById("txtResultado").value = salario.toString();
}
function ObtenerCoeficiente() {
    return (parseInt(document.getElementById("nmbHoras").value) * 4) * 6.88;
}
//# sourceMappingURL=main.js.map