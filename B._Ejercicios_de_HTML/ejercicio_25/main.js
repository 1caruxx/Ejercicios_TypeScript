"use strict";
function Validar() {
    var sexo = (document.getElementById("txtSexo").value).toLowerCase();
    //var mensaje : string = "Todo esta en orden";
    var dni = "";
    var valido = 1;
    if (!(document.getElementById("txtNombre").value)) {
        document.getElementById("txtNombre").value = "Nombre invalido";
        document.getElementById("txtNombre").style.color = "#ff0000";
        valido = 0;
    }
    if (!(document.getElementById("txtApellido").value)) {
        document.getElementById("txtApellido").value = "Apellido invalido";
        document.getElementById("txtApellido").style.color = "#ff0000";
        valido = 0;
    }
    if (!(document.getElementById("txtDni").value)) {
        document.getElementById("txtDni").value = "DNI invalido";
        document.getElementById("txtDni").style.color = "#ff0000";
        valido = 0;
    }
    else {
        dni = document.getElementById("txtDni").value;
        for (var i = 0; i < dni.length; i++) {
            if (isNaN(parseInt(dni.charAt(i)))) {
                document.getElementById("txtDni").value = "DNI invalido";
                document.getElementById("txtDni").style.color = "#ff0000";
                valido = 0;
                break;
            }
        }
    }
    if (sexo != "m" && sexo != "f") {
        document.getElementById("txtSexo").value = "Sexo invalido";
        document.getElementById("txtSexo").style.color = "#ff0000";
        valido = 0;
    }
    if (valido) {
        console.log("Todo esta en orden");
    }
    else {
        console.log("Algun campo es incorrecto");
    }
}
//# sourceMappingURL=main.js.map