/// <reference path="./libs/index.d.ts"/>

function CambiarPorcentaje(numero:number) {

    $("#barra").css("width" , numero.toString() + "%");
    $("#change").val(numero.toString());
    $("#divAlert").html("Porcentaje de la barra: " + numero.toString() + "%");

    if(numero>0 && numero<19) {

        $("#divAlert").attr("class" , "alert alert-danger");
    }
    else {

        if(numero>18 && numero<68) {

            $("#divAlert").attr("class" , "alert alert-warning");
        }
        else {

            $("#divAlert").attr("class" , "alert alert-success");
        }
    }
}