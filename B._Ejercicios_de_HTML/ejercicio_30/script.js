"use strict";
function Coordenadas(evento) {
    var X = document.createTextNode("X: " + evento.clientX);
    var Y = document.createTextNode("Y: " + evento.clientY);
    document.getElementById("divCoordenadas").appendChild(X);
    document.getElementById("divCoordenadas").appendChild(Y);
}
//# sourceMappingURL=script.js.map