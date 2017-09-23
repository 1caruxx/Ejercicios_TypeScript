/// <reference path="libs/jquery/index.d.ts" />

namespace Main {
    export function ModificarPs():void {
        
        //A TODOS LOS ELEMENTOS LE CAMBIO EL COLOR DE LETRA
        let contenidoAnterior = $("P").css("color","black");

    }
            
    export function ModificarPorId():void {

        //A UN DETERMINADO ELEMENTO LE CAMBIO EL CONTENIDO
        let contenidoAnterior = $("#idP").html();
        alert(contenidoAnterior);

        //A UN DETERMINADO ELEMENTO LE CAMBIO EL CONTENIDO
        $("#idP").html("Establezco un nuevo contenido en el elemento HTML.");

        console.log("para acceder (por id) a un elemento HTML");
        console.log("se coloca como selector el valor de su atributo ID");
        console.log("anteponiendole el simbolo '#'.");    
    }

    export function MostrarDatos():void {

        //OBTENGO LOS DISTINTOS VALORES POR ID DE ELEMENTO
        let nombre = $("#txtNombre").val();
        let opcion = $("#cboSeleccion").val();

        alert("Nombre: " + nombre + "\nOpcion: " + opcion);

        //COLOCO LOS VALORES RECUPERADOS EN UN DIV
        $("#idDiv").html("Nombre: " + nombre + "<br>Opcion: " + opcion);
    }

    export function CambiarDatos():void {

        //ESTABLEZCO NUEVOS VALORES
        alert("Cambia de valor la seleccion ('op2')\ny del nombre ('ROBERTO')");
        
        $("#txtNombre").val("ROBERTO");
        $("#cboSeleccion").val("op2");

    }
    export function JqueryAjax():void {

        let pagina = "BACKEND/ajax_test.php";

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
    export function JqueryAjaxConParametrosString():void {

        let pagina = "BACKEND/ajax_test.php";
        let datoString = "valor=hola";

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
                        
    export function JqueryAjaxConParametrosJSON():void {

        let pagina = "BACKEND/recibir_json.php";
        let datoObjeto = {"miPersona" : { "nombre" : "JUAN", "edad" : 52 } };

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

    export function JqueryAjaxRetornoJSON():void {

        let pagina = "BACKEND/enviar_json.php";

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
}