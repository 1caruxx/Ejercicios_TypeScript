"use strict";
/// <reference path="./node_modules/@types/jquery/index.d.ts"/>
/// <reference path="./Vehiculo.ts"/>
/// <reference path="./Auto.ts"/>
var Entidades;
(function (Entidades) {
    var ManejadoraDeAutos = /** @class */ (function () {
        function ManejadoraDeAutos() {
        }
        ManejadoraDeAutos.AgregarAuto = function () {
            var marca = $("#cboMarca").val();
            var patente = $("#txtPatente").val();
            var precio = parseInt($("#txtPrecio").val());
            var color = $("#txtColor").val();
            var auto = new Entidades.Auto(marca, patente, precio, color);
            var archivo = document.getElementById("foto");
            var formData = new FormData();
            formData.append("foto", archivo.files[0]);
            formData.append("accion", "agregar");
            formData.append("json", auto.ToJSON());
            $.ajax({
                type: "POST",
                url: "./admin.php",
                dataType: "text",
                cache: false,
                contentType: false,
                processData: false,
                data: formData,
                async: true
            })
                .done(function (respuesta) {
                alert(respuesta);
            });
        };
        ManejadoraDeAutos.MostrarAutos = function () {
            var div = document.getElementById("divTabla");
            $.ajax({
                type: "POST",
                url: "./admin.php",
                dataType: "json",
                data: "accion=listar",
                async: true
            })
                .done(function (respuesta) {
                var stringAux = "<table>\n                                    <tbody>\n                                        <thead>\n                                            <th>Marca</th>\n                                            <th>Precio</th>\n                                            <th>Color</th>\n                                            <th>Patente</th>\n                                            <th>Foto</th>\n                                            <th>Accion</th>\n                                        </thead>";
                for (var _i = 0, respuesta_1 = respuesta; _i < respuesta_1.length; _i++) {
                    var item = respuesta_1[_i];
                    stringAux += "<tr>\n                                      <td>" + (item.datos).marca + "</td>\n                                      <td>" + (item.datos).precio + "</td>\n                                      <td>" + (item.estetica).color + "</td>\n                                      <td>" + (item.datos).patente + "</td>\n                                      <td><img src=\"./BACKEND/fotos/" + (item.estetica).foto + "\" width=\"50px\" height=\"50px\"/></td>\n                                      <td>\n                                          <input type=\"button\" value=\"Eliminar\" onclick=\"Entidades.ManejadoraDeAutos.EliminarAuto('" + (item.datos).patente + "')\"/>\n                                          <input type=\"button\" value=\"Modificar\" onclick=\"Entidades.ManejadoraDeAutos.ModificarAuto('" + (item.datos).marca + "' , '" + (item.datos).precio + "' , '" + (item.estetica).color + "' , '" + (item.datos).patente + "')\"/>\n                                      </td>\n                                  </tr>";
                }
                stringAux += "</tbody>\n                            </table>";
                div.innerHTML = stringAux;
            })
                .fail(function (respuesta) {
                alert("Algo salio mal.");
                alert(respuesta);
            });
        };
        ManejadoraDeAutos.EliminarAuto = function (patente) {
            var parametros = "accion=eliminar&patente=" + patente;
            $.ajax({
                type: "POST",
                url: "./admin.php",
                dataType: "text",
                data: parametros,
                async: true
            })
                .done(function (respuesta) {
                alert(respuesta);
            })
                .fail(function (respuesta) {
                alert("Algo salio mal.");
                alert(respuesta);
            });
        };
        ManejadoraDeAutos.ModificarAuto = function (marca, precio, color, patente) {
            $("#cboMarca").val(marca);
            $("#txtPrecio").val(precio);
            $("#txtColor").val(color);
            $("#btnConfirmar").click(function () {
                var vMarca = $("#cboMarca").val();
                var vPrecio = parseInt($("#txtPrecio").val());
                var vColor = $("#txtColor").val();
                var auto = new Entidades.Auto(vMarca, patente, vPrecio, vColor);
                var archivo = document.getElementById("foto");
                var formData = new FormData();
                formData.append("foto", archivo.files[0]);
                formData.append("accion", "modificar");
                formData.append("json", auto.ToJSON());
                $.ajax({
                    type: "POST",
                    url: "./admin.php",
                    dataType: "text",
                    cache: false,
                    contentType: false,
                    processData: false,
                    data: formData,
                    async: true
                })
                    .done(function (respuesta) {
                })
                    .fail(function (respuesta) {
                    alert("Algo salio mal.");
                    alert(respuesta);
                });
            });
        };
        ManejadoraDeAutos.FiltrarPorMarca = function () {
            var div = document.getElementById("divTabla");
            var marca = $("#cboMarca").val();
            var parametros = "accion=filtrar&marca=" + marca;
            $.ajax({
                type: "POST",
                url: "./admin.php",
                dataType: "json",
                data: parametros,
                async: true
            })
                .done(function (respuesta) {
                var stringAux = "<table>\n                <tbody>\n                    <thead>\n                        <th>Marca</th>\n                        <th>Precio</th>\n                        <th>Color</th>\n                        <th>Patente</th>\n                        <th>Foto</th>\n                        <th>Accion</th>\n                    </thead>";
                for (var _i = 0, respuesta_2 = respuesta; _i < respuesta_2.length; _i++) {
                    var item = respuesta_2[_i];
                    stringAux += "<tr>\n                                <td>" + (item.datos).marca + "</td>\n                                <td>" + (item.datos).precio + "</td>\n                                <td>" + (item.estetica).color + "</td>\n                                <td>" + (item.datos).patente + "</td>\n                                <td><img src=\"./BACKEND/fotos/" + (item.estetica).foto + "\" width=\"50px\" height=\"50px\"/></td>\n                                <td>\n                                    <input type=\"button\" value=\"Eliminar\" onclick=\"Entidades.ManejadoraDeAutos.EliminarAuto('" + (item.datos).patente + "')\"/>\n                                    <input type=\"button\" value=\"Modificar\" onclick=\"Entidades.ManejadoraDeAutos.ModificarAuto('" + (item.datos).marca + "' , '" + (item.datos).precio + "' , '" + (item.estetica).color + "' , '" + (item.datos).patente + "')\"/>\n                                </td>\n                            </tr>";
                }
                stringAux += "</tbody>\n                        </table>";
                div.innerHTML = stringAux;
            });
        };
        ManejadoraDeAutos.PreVisualizar = function () {
            var archivo = document.getElementById("foto");
            var formData = new FormData();
            formData.append("foto", archivo.files[0]);
            formData.append("accion", "previsualizar");
            $.ajax({
                type: "POST",
                url: "./admin.php",
                dataType: "text",
                cache: false,
                contentType: false,
                processData: false,
                data: formData,
                async: true
            })
                .done(function (resultado) {
                $("#imagen").attr("src", resultado);
            });
        };
        ManejadoraDeAutos.Eliminados = function () {
            var div = document.getElementById("divTabla");
            $.ajax({
                type: "POST",
                url: "./admin.php",
                dataType: "json",
                data: "accion=mostrarEliminados",
                async: true
            })
                .done(function (respuesta) {
                var stringAux = "<table>\n                                    <tbody>\n                                        <thead>\n                                            <th>Marca</th>\n                                            <th>Precio</th>\n                                            <th>Color</th>\n                                            <th>Patente</th>\n                                        </thead>";
                for (var _i = 0, respuesta_3 = respuesta; _i < respuesta_3.length; _i++) {
                    var item = respuesta_3[_i];
                    stringAux += "<tr>\n                                    <td>" + (item.datos).marca + "</td>\n                                    <td>" + (item.datos).precio + "</td>\n                                    <td>" + (item.estetica).color + "</td>\n                                    <td>" + (item.datos).patente + "</td>\n                                  </tr>";
                }
                stringAux += "</tbody>\n                            </table>";
                div.innerHTML = stringAux;
            })
                .fail(function (respuesta) {
                alert("Algo salio mal.");
                alert(respuesta);
            });
        };
        return ManejadoraDeAutos;
    }());
    Entidades.ManejadoraDeAutos = ManejadoraDeAutos;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=ManejadoraDeAutos.js.map