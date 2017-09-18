"use strict";
function Mostrar() {
    var xhttp = new XMLHttpRequest();
    var contador = 0;
    xhttp.open("GET", "./traerAuto.php");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("txtAtributo" + contador).value = xhttp.responseText;
            contador++;
        }
    };
}
//# sourceMappingURL=json.js.map