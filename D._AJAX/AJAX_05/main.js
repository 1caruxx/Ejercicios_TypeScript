"use strict";
function Enviar() {
    var usuario = document.getElementById("txtUsuario").value;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "./comprobarDisponibilidad.php?usuario=" + usuario);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.status == 200 && xhttp.readyState == 4) {
            alert(xhttp.responseText);
        }
    };
}
//# sourceMappingURL=main.js.map