"use strict";
function GenerarTabla() {
    var xhttp = new XMLHttpRequest();
    var stringAuxiliar = "<tbody><thead><th>ID</th><th>Marca</th><th>Precio</th><th>Color</th><th>Modelo</th></thead></tbody>";
    xhttp.open("GET", "./administrarCiudades.php?accion=listar");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var json = JSON.parse(xhttp.responseText);
            for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
                var item = json_1[_i];
                stringAuxiliar += "<tr><td>" + item._id + "</td><td>" + item.name + "</td><td>" + item.country + "</td><td>" + (item.coord).lon + "</td><td>" + (item.coord).lat + "</td></tr>";
            }
            document.getElementById("table").innerHTML = stringAuxiliar;
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
    xhttp.open("GET", "./administrarCiudades.php?accion=agregar&json=" + JSON.stringify(json));
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            alert(xhttp.responseText);
        }
    };
}
//# sourceMappingURL=json.js.map