"use strict";
/// <reference path="node_modules/@types/jquery/index.d.ts"/>
function MostrarTexto() {
    var stringAuxiliar = $("#txtTexto").val();
    alert(stringAuxiliar);
    $("#divMostrar").html(stringAuxiliar);
}
function MostrarTextoAjax() {
    var parametros = "valor=" + $("#txtTexto").val();
    $.ajax({
        type: 'POST',
        url: "./admin.php",
        dataType: "text",
        data: parametros,
        async: true
    })
        .done(function (resultado) {
        $("#divMostrar").html(resultado);
    })
        .fail(function (resultado) {
        alert(resultado);
    });
}
//# sourceMappingURL=jquery.js.map