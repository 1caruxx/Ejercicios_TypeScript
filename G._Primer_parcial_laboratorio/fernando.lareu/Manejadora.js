"use strict";
/// <reference path="./Persona.ts"/>
/// <reference path="./Ciudadano.ts"/>
var Entidades;
(function (Entidades) {
    var Manejadora = /** @class */ (function () {
        function Manejadora() {
        }
        Manejadora.agregarCiudadano = function () {
            var nombre = document.getElementById("txtNombre").value;
            var apellido = document.getElementById("txtApellido").value;
            var edad = parseInt(document.getElementById("txtEdad").value);
            var dni = parseInt(document.getElementById("txtDni").value);
            var pais = document.getElementById("cboPais").value;
            var xhttp = new XMLHttpRequest();
            var ciudadano = new Entidades.Ciudadano(nombre, apellido, edad, dni, pais);
            xhttp.open("get", "./admin.php?accion=agregar&json=" + ciudadano.ToString());
            xhttp.send();
        };
        Manejadora.mostrarCiudadanos = function () {
            var xhttp = new XMLHttpRequest();
            var div = document.getElementById("divTabla");
            xhttp.open("get", "./admin.php?accion=listar");
            xhttp.send();
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    var json = JSON.parse(xhttp.responseText);
                    var cadenaAuxiliar = "<table><tbody><thead><th>Nombre</th><th>Apellido</th><th>Edad</th><th>DNI</th><th>Pais</th><th>Imagen</th><th>Accion</th></thead>";
                    for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
                        var item = json_1[_i];
                        cadenaAuxiliar += "<tr><td>" + (item.datosPersonales).nombre + "</td>\n                        <td>" + (item.datosPersonales).apellido + "</td>\n                        <td>" + (item.datosPersonales).edad + "</td>\n                        <td>" + (item.datosCiviles).dni + "</td>\n                        <td>" + (item.datosCiviles).pais + "</td>\n                        <td><img src='" + (item.datosCiviles).foto + "'/></td>\n                        <td><input type='button' value='eliminar' onclick='eliminarCiudadano(" + (item.datosCiviles).dni + ")'/>\n                        <input type='button' value='modificar' onclick='modificarCiudadano(" + (item.datosPersonales).nombre + " , " + (item.datosPersonales).apellido + " , " + (item.datosPersonales).edad + ", " + (item.datosCiviles).dni + " , " + (item.datosCiviles).pais + "'/></td>\n                        </tr>";
                    }
                    cadenaAuxiliar += "</tbody></table>";
                    div.innerHTML = cadenaAuxiliar;
                }
            };
        };
        Manejadora.eliminarCiudadano = function (dni) {
            var xhttp = new XMLHttpRequest();
            xhttp.open("get", "./admin.php?accion=eliminar&dni=" + dni);
            xhttp.send();
        };
        Manejadora.modificarCiudadano = function (nombre, apellido, edad, dni, pais) {
            document.getElementById("txtNombre").value = nombre;
            document.getElementById("txtApellido").value = apellido;
            document.getElementById("txtEdad").value = edad;
            document.getElementById("txtDni").value = dni;
            document.getElementById("cboPais").value = pais;
            var vNombre = document.getElementById("txtNombre").value;
            var vApellido = document.getElementById("txtApellido").value;
            var vEdad = parseInt(document.getElementById("txtEdad").value);
            var vDni = parseInt(document.getElementById("txtDni").value);
            var vPais = document.getElementById("cboPais").value;
            var xhttp = new XMLHttpRequest();
            var ciudadano = new Entidades.Ciudadano(vNombre, vApellido, vEdad, vDni, vPais);
            xhttp.open("get", "./admin.php?accion=modificar&json=" + ciudadano.ToString());
        };
        return Manejadora;
    }());
    Entidades.Manejadora = Manejadora;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=Manejadora.js.map