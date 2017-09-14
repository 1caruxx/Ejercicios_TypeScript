"use strict";
function Enviar() {
    var xhttp = new XMLHttpRequest();
    var ruta = document.getElementById("txtRuta").value;
    var palabra = document.getElementById("txtPalabra").value;
    var esValido = true;
    for (var i = 0; i < palabra.length; i++) {
        if (palabra.charAt(i) == " ") {
            esValido = false;
            break;
        }
    }
    if (esValido) {
        xhttp.open("GET", "./admin.php/?ruta=" + ruta + "&palabra=" + palabra);
        xhttp.send();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                if (xhttp.responseText === "false") {
                    alert("No se pudo abrir el archivo.");
                }
                else {
                    alert(xhttp.responseText);
                }
            }
        };
    }
    else {
        alert("Debe ser solo una palabra.");
    }
}
//# sourceMappingURL=main.js.map