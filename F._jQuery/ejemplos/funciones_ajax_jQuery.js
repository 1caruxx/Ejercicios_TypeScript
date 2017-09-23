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
