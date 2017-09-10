"use strict";
function Agregar(texto) {
    var strings = texto.split(" ");
    var nodoTexto;
    var options = new Array();
    var select = document.createElement("select");
    var br = document.createElement("br");
    var i = 0;
    for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
        var item = strings_1[_i];
        nodoTexto = document.createTextNode(item);
        //Es necesario crear un array de nodos ya que pisar el mismo nodo no creara uno nuevo sino que agregara el elemento al mismo.
        options[i] = document.createElement("option");
        options[i].appendChild(nodoTexto);
        select.appendChild(options[i]);
        i++;
    }
    document.getElementById("div").appendChild(select);
    document.getElementById("div").appendChild(br);
}
//# sourceMappingURL=main.js.map