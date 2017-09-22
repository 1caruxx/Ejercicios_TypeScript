"use strict";
function GenerarTabla() {
    var xhttp = new XMLHttpRequest();
    var stringAuxiliar = "<tbody><thead><th>ID</th><th>Marca</th><th>Precio</th><th>Color</th><th>Modelo</th></thead></tbody>";
    xhttp.open("GET", "./traerAuto.php");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var json = JSON.parse(xhttp.responseText);
            for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
                var item = json_1[_i];
                stringAuxiliar += "<tr><td>" + item.Id + "</td><td>" + item.Marca + "</td><td>" + item.Precio + "</td><td>" + item.Color + "</td><td>" + item.Modelo + "</td></tr>";
            }
            document.getElementById("table").innerHTML = stringAuxiliar;
        }
    };
}
//# sourceMappingURL=json.js.map