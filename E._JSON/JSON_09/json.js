"use strict";
function GenerarTabla() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "./traerAuto.php");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var json = JSON.parse(xhttp.responseText);
            for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
                var item = json_1[_i];
                var tr = document.createElement("tr");
                var tdId = document.createElement("td");
                var tdMarca = document.createElement("td");
                var tdPrecio = document.createElement("td");
                var tdColor = document.createElement("td");
                var tdModelo = document.createElement("td");
                tdId.appendChild(document.createTextNode(item.Id));
                tdMarca.appendChild(document.createTextNode(item.Marca));
                tdPrecio.appendChild(document.createTextNode(item.Precio));
                tdColor.appendChild(document.createTextNode(item.Color));
                tdModelo.appendChild(document.createTextNode(item.Modelo));
                tr.appendChild(tdId);
                tr.appendChild(tdMarca);
                tr.appendChild(tdPrecio);
                tr.appendChild(tdColor);
                tr.appendChild(tdModelo);
                document.getElementById("table").appendChild(tr);
            }
        }
    };
}
//# sourceMappingURL=json.js.map