"use strict";
function Mostrar() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "./traerAuto.php");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var json = JSON.parse(xhttp.responseText);
            document.getElementById("id").value = json.Id;
            document.getElementById("marca").value = json.Marca;
            document.getElementById("precio").value = json.Precio;
            document.getElementById("color").value = json.Color;
            document.getElementById("modelo").value = json.Modelo;
        }
    };
}
//# sourceMappingURL=json.js.map