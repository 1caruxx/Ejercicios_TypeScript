"use strict";
/// <reference path="MOCK_DATA.ts" />
var users = datos.MOCK_DATA;
/*var stringJSON : string = '[';

    for(let item of users) {

        stringJSON += JSON.stringify(item)+",";
    }
    
stringJSON += ']';*/
$(document).ready(function () {
    /*
     * Es importante verificar que el localStorage este o no cargado para no pisar datos,
        * por que si yo agrego un usuario al localStorage por no a datos.MOCK_DATA, este desaparecera por que seteo el
        * localStorage cada vez que se carga la pagina.
     * Para verificarlo, tengo que preguntar si el localStorage es igual a null. Si lo es, lo seteo, sino, doy pie a los eventos.
     */
    if (localStorage.getItem("usuarios") == null) {
        alert("hola");
        localStorage.setItem("usuarios", JSON.stringify(users));
    }
    $("#btnVerificar").click(function () {
        if (VerificarExistencia()) {
            alert("El usuario ya existe.");
        }
        else {
            alert("El usuario no existe.");
        }
    });
    $("#btnListar").click(function () {
        var arrayDeUsuarios = TraerUsuarios();
        for (var _i = 0, arrayDeUsuarios_1 = arrayDeUsuarios; _i < arrayDeUsuarios_1.length; _i++) {
            var item = arrayDeUsuarios_1[_i];
            console.log("ID: " + item.id + "\n\n            Nombre: " + item.nombre + "\n\n            Apellido: " + item.apellido + "\n\n            eMail: " + item.email + "\n\n            sexo: " + item.sexo + "\n\n            trabajo: " + item.trabajo + "\n,\n            pais: " + item.pais + "\n\n            ciudad: " + item.pais + "\n\n            Edad: " + item.edad + "\n\n");
        }
    });
    $("#btnCargar").click(function () {
        if (VerificarExistencia()) {
            alert("No se pudo cargar por que el usuario ya existe.");
        }
        else {
            var arrayDeUsuarios = TraerUsuarios();
            var objJSON = "{\"id\":" + $("#txtId").val() + ",\n            \"nombre\":\"" + $("#txtNombre").val() + "\",\n            \"apellido\":\"" + $("#txtApellido").val() + "\",\n            \"email\":\"" + $("#emlMail").val() + "\",\n            \"sexo\":\"" + $("#txtSexo").val() + "\",\n            \"trabajo\":\"" + $("#txtTrabajo").val() + "\",\n            \"pais\":\"" + $("#txtPais").val() + "\",\n            \"ciudad\":\"" + $("#txtCiudad").val() + "\",\n            \"edad\":" + $("#txtEdad").val() + "}";
            arrayDeUsuarios.push(JSON.parse(objJSON));
            datos.MOCK_DATA = arrayDeUsuarios;
            localStorage.setItem("usuarios", JSON.stringify(arrayDeUsuarios));
            alert("Se ha dado de alta exitosamente.");
        }
    });
});
function TraerUsuarios() {
    return JSON.parse(localStorage.getItem("usuarios"));
}
function VerificarExistencia() {
    var arrayDeUsuarios = TraerUsuarios();
    var mail = $("#emlMail").val();
    var existe = false;
    for (var _i = 0, arrayDeUsuarios_2 = arrayDeUsuarios; _i < arrayDeUsuarios_2.length; _i++) {
        var item = arrayDeUsuarios_2[_i];
        if (item.email == mail) {
            existe = true;
        }
    }
    return existe;
}
//# sourceMappingURL=adminLS.js.map