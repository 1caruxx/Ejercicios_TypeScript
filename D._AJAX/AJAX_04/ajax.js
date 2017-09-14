"use strict";
function Calcular() {
    var numero1 = document.getElementById("txtNumero1").value;
    var numero2 = document.getElementById("txtNumero2").value;
    var operador = document.getElementById("slcOperadores").value;
    var xhttp = new XMLHttpRequest();
    var esNumero = true;
    if (!ValidarNumero(numero1) || !ValidarNumero(numero2)) {
        alert("Uno de los operadores no es valido");
    }
    else {
        xhttp.open("GET", "./admin.php?numero1=" + numero1 + "&numero2=" + numero2 + "&operador=" + operador);
        xhttp.send();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                if (xhttp.responseText == "false") {
                    alert("No se ha podido realizar la operacion.");
                }
                else {
                    document.getElementById("span").innerHTML = "Resultado: " + xhttp.responseText + "&nbsp;";
                }
            }
        };
    }
}
function ValidarNumero(numero) {
    var retorno = true;
    for (var i = 0; i < numero.length; i++) {
        if (isNaN(parseInt(numero.charAt(i)))) {
            retorno = false;
            break;
        }
    }
    return retorno;
}
//# sourceMappingURL=ajax.js.map