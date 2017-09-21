"use strict";
function GenerarTabla() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "./administrarCiudades.php");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var json = JSON.parse(xhttp.responseText);
            for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
                var item = json_1[_i];
                var tr = document.createElement("tr");
                var tdId = document.createElement("td");
                var tdName = document.createElement("td");
                var tdCountry = document.createElement("td");
                var tdLongitud = document.createElement("td");
                var tdLatitud = document.createElement("td");
                tdId.appendChild(document.createTextNode(item._id));
                tdName.appendChild(document.createTextNode(item.name));
                tdCountry.appendChild(document.createTextNode(item.country));
                tdLongitud.appendChild(document.createTextNode((item.coord).lon));
                tdLatitud.appendChild(document.createTextNode((item.coord).lat));
                ;
                tr.appendChild(tdId);
                tr.appendChild(tdName);
                tr.appendChild(tdCountry);
                tr.appendChild(tdLongitud);
                tr.appendChild(tdLatitud);
                document.getElementById("table").appendChild(tr);
            }
        }
    };
}
function Agregar() {
    var ID = document.getElementById("txtId").value;
    var name = document.getElementById("txtNombre").value;
    var country = document.getElementById("txtCountry").value;
    var lon = document.getElementById("txtLongitud").value;
    var lat = document.getElementById("txtLatitud").value;
    var json = { "_id": ID, "name": name, "country": country, "coord": { "lon": lon, "lat": lat } };
    var xhttp = new XMLHttpRequest();
    //alert(JSON.stringify(json));
    xhttp.open("GET", "./administrarCiudades.php?json=" + JSON.stringify(json));
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            alert(xhttp.responseText);
        }
    };
}
//# sourceMappingURL=json.js.map