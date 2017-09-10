"use strict";
function CrearTabla(filas, columnas) {
    var tabla = document.createElement("table");
    var tbody = document.createElement("tbody");
    var br = document.createElement("br");
    var nodoFilas = new Array();
    for (var i = 0; i < filas; i++) {
        nodoFilas[i] = document.createElement("tr");
        for (var j = 0; j < columnas; j++) {
            nodoFilas[i].appendChild(document.createElement("td"));
        }
        tbody.appendChild(nodoFilas[i]);
    }
    tabla.setAttribute("border", "1");
    tabla.appendChild(tbody);
    document.getElementById("div").appendChild(br);
    document.getElementById("div").appendChild(tabla);
}
//# sourceMappingURL=main.js.map