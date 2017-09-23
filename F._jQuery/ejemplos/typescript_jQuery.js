"use strict";
/// <reference path="libs/jquery/index.d.ts" />
var Main;
(function (Main) {
    function ModificarPs() {
        //A TODOS LOS ELEMENTOS LE CAMBIO EL COLOR DE LETRA
        var contenidoAnterior = $("P").css("color", "black");
    }
    Main.ModificarPs = ModificarPs;
    function ModificarPorId() {
        //A UN DETERMINADO ELEMENTO LE CAMBIO EL CONTENIDO
        var contenidoAnterior = $("#idP").html();
        alert(contenidoAnterior);
        //A UN DETERMINADO ELEMENTO LE CAMBIO EL CONTENIDO
        $("#idP").html("Establezco un nuevo contenido en el elemento HTML.");
        console.log("para acceder (por id) a un elemento HTML");
        console.log("se coloca como selector el valor de su atributo ID");
        console.log("anteponiendole el simbolo '#'.");
    }
    Main.ModificarPorId = ModificarPorId;
    function MostrarDatos() {
        //OBTENGO LOS DISTINTOS VALORES POR ID DE ELEMENTO
        var nombre = $("#txtNombre").val();
        var opcion = $("#cboSeleccion").val();
        alert("Nombre: " + nombre + "\nOpcion: " + opcion);
        //COLOCO LOS VALORES RECUPERADOS EN UN DIV
        $("#idDiv").html("Nombre: " + nombre + "<br>Opcion: " + opcion);
    }
    Main.MostrarDatos = MostrarDatos;
    function CambiarDatos() {
        //ESTABLEZCO NUEVOS VALORES
        alert("Cambia de valor la seleccion ('op2')\ny del nombre ('ROBERTO')");
        $("#txtNombre").val("ROBERTO");
        $("#cboSeleccion").val("op2");
    }
    Main.CambiarDatos = CambiarDatos;
    function JqueryAjax() {
        var pagina = "BACKEND/ajax_test.php";
        //LIMPIO EL CONTENIDO DEL DIV    
        $("#divResultado").html("");
        $.ajax({
            type: 'POST',
            url: pagina,
            dataType: "text",
            async: true
        })
            .done(function (resultado) {
            //MUESTRO EL RESULTADO DE LA PETICION
            $("#divResultado").html(resultado);
        })
            .fail(function (jqXHR, textStatus, errorThrown) {
            alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
        });
    }
    Main.JqueryAjax = JqueryAjax;
    function JqueryAjaxConParametrosString() {
        var pagina = "BACKEND/ajax_test.php";
        var datoString = "valor=hola";
        //LIMPIO EL CONTENIDO DEL DIV    
        $("#divResultado").html("");
        $.ajax({
            type: 'POST',
            url: pagina,
            dataType: "text",
            data: datoString,
            async: true
        })
            .done(function (resultado) {
            //MUESTRO EL RESULTADO DE LA PETICION
            $("#divResultado").html(resultado);
        })
            .fail(function (jqXHR, textStatus, errorThrown) {
            alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
        });
    }
    Main.JqueryAjaxConParametrosString = JqueryAjaxConParametrosString;
    function JqueryAjaxConParametrosJSON() {
        var pagina = "BACKEND/recibir_json.php";
        var datoObjeto = { "miPersona": { "nombre": "JUAN", "edad": 52 } };
        //LIMPIO EL CONTENIDO DEL DIV    
        $("#divResultado").html("");
        $.ajax({
            type: 'POST',
            url: pagina,
            dataType: "text",
            data: datoObjeto,
            async: true
        })
            .done(function (resultado) {
            //MUESTRO EL RESULTADO DE LA PETICION
            $("#divResultado").html(resultado);
        })
            .fail(function (jqXHR, textStatus, errorThrown) {
            alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
        });
    }
    Main.JqueryAjaxConParametrosJSON = JqueryAjaxConParametrosJSON;
    function JqueryAjaxRetornoJSON() {
        var pagina = "BACKEND/enviar_json.php";
        //LIMPIO EL CONTENIDO DEL DIV    
        $("#divResultado").html("");
        $.ajax({
            type: 'POST',
            url: pagina,
            dataType: "json"
        })
            .done(function (objJSON) {
            //MUESTRO EL RESULTADO DE LA PETICION
            $("#divResultado").html(objJSON.edad + " - " + objJSON.nombre);
        })
            .fail(function (jqXHR, textStatus, errorThrown) {
            alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
        });
    }
    Main.JqueryAjaxRetornoJSON = JqueryAjaxRetornoJSON;
})(Main || (Main = {}));
//# sourceMappingURL=typescript_jQuery.js.map