"use strict";
/// <reference path="./node_modules/@types/jquery/index.d.ts"/>
/// <reference path="./Persona.ts"/>
/// <reference path="./Ciudadano.ts"/>
var Entidades;
(function (Entidades) {
    var Manejadora = /** @class */ (function () {
        function Manejadora() {
        }
        Manejadora.AgregarCiudadano = function () {
            var nombre = $("#txtNombre").val();
            var apellido = $("#txtApellido").val();
            var edad = parseInt($("#txtEdad").val());
            var dni = parseInt($("#txtDni").val());
            var pais = $("#cboPais").val();
            var ciudadano = new Entidades.Ciudadano(nombre, apellido, edad, dni, pais);
            $(document).ready(function () {
                Manejadora.ChequearLocalStorage();
                var archivo = document.getElementById("foto");
                var formData = new FormData();
                formData.append("foto", archivo.files[0]);
                formData.append("accion", "agregar");
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
                    ciudadano.foto = respuesta;
                    /*
                     * Estas tres lineas de codigo tienen que estar dentro del evento .done() ya que este puede dispararse en cualquier momento, incluso despues
                        * de que estas lineas se ejecuten, por lo que el atributo foto de la instancia ciudadano estara seteada como undefinid.
                     */
                    var usuarios = Manejadora.TraerUsuarios();
                    usuarios.push(JSON.parse(ciudadano.ToJSON()));
                    localStorage.setItem("usuarios", JSON.stringify(usuarios));
                    alert("Se a agregado correctamente.");
                })
                    .fail(function () {
                    alert("Algo salio mal.");
                });
            });
        };
        Manejadora.MostrarCiudadanos = function () {
            /*
             * No se usa la sintaxis de jQuery por que esta no permite acceder a la propiedad innerHTML.
             */
            var div = document.getElementById("divTabla");
            $(document).ready(function () {
                Manejadora.ChequearLocalStorage();
                var usuarios = Manejadora.TraerUsuarios();
                var stringAux = "<table>\n                                    <tbody>\n                                        <thead>\n                                            <th>Nombre</th>\n                                            <th>Apellido</th>\n                                            <th>Edad</th>\n                                            <th>DNI</th>\n                                            <th>Pais<th>\n                                            <th>Foto</th>\n                                            <th>Accion</th>\n                                        </thead>";
                for (var _i = 0, usuarios_1 = usuarios; _i < usuarios_1.length; _i++) {
                    var item = usuarios_1[_i];
                    stringAux += "<tr>\n                                      <td>" + (item.datosPersonales).nombre + "</td>\n                                      <td>" + (item.datosPersonales).apellido + "</td>\n                                      <td>" + (item.datosPersonales).edad + "</td>\n                                      <td>" + (item.datosCiviles).dni + "</td>\n                                      <td>" + (item.datosCiviles).pais + "</td>\n                                      <td><img src=\"./BACKEND/fotos/" + (item.datosCiviles).foto + "\" width=\"100px\" height=\"100px\"/></td>\n                                      <td>\n                                          <input type=\"button\" value=\"Eliminar\" onclick=\"Entidades.Manejadora.EliminarCiudadano(" + (item.datosCiviles).dni + ")\"/>\n                                          <input type=\"button\" value=\"Modificar\" onclick=\"Entidades.Manejadora.ModificarCiudadano('" + (item.datosPersonales).nombre + "' , '" + (item.datosPersonales).apellido + "' , '" + (item.datosPersonales).edad + "' , '" + (item.datosCiviles).dni + "' , '" + (item.datosCiviles).pais + "')\"/>\n                                      </td>\n                                  </tr>";
                }
                stringAux += "</tbody>\n                            </table>";
                /*
                 * Es necesario primero guardar toda la estructura del table en una variable auxiliar (en este caso stringAux) por que no se puede concatenar valores en la propiedad .innerHTML.
                 */
                div.innerHTML = stringAux;
            });
        };
        Manejadora.EliminarCiudadano = function (dni) {
            $(document).ready(function () {
                var usuarios = Manejadora.TraerUsuarios();
                var contador = 0;
                for (var _i = 0, usuarios_2 = usuarios; _i < usuarios_2.length; _i++) {
                    var item = usuarios_2[_i];
                    if ((item.datosCiviles).dni == parseInt(dni)) {
                        var foto = (item.datosCiviles).foto;
                        usuarios.splice(contador, 1);
                        break;
                    }
                    contador++;
                }
                localStorage.setItem("usuarios", JSON.stringify(usuarios));
                var parametros = "accion=eliminar&foto=" + foto;
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
            });
        };
        Manejadora.ModificarCiudadano = function (nombre, apellido, edad, dni, pais) {
            $("#txtNombre").val(nombre);
            $("#txtApellido").val(apellido);
            $("#txtEdad").val(edad);
            $("#cboPais").val(pais);
            $("#btnConfirmar").click(function () {
                var vNombre = $("#txtNombre").val();
                var vApellido = $("#txtApellido").val();
                var vEdad = parseInt($("#txtEdad").val());
                var vPais = $("#cboPais").val();
                var contador = 0;
                var ciudadano = new Entidades.Ciudadano(vNombre, vApellido, vEdad, parseInt(dni), vPais);
                $(document).ready(function () {
                    var usuarios = Manejadora.TraerUsuarios();
                    for (var _i = 0, usuarios_3 = usuarios; _i < usuarios_3.length; _i++) {
                        var item = usuarios_3[_i];
                        alert((item.datosCiviles).dni);
                        if ((item.datosCiviles).dni == parseInt(dni)) {
                            var foto = (item.datosCiviles).foto;
                            var archivo = document.getElementById("foto");
                            var formData = new FormData();
                            formData.append("foto", archivo.files[0]);
                            formData.append("accion", "modificar");
                            formData.append("nombreFoto", foto);
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
                                ciudadano.foto = respuesta;
                                //usuarios[contador] = ciudadano;
                                usuarios.splice(contador, 1, ciudadano);
                                alert("Contador: " + contador + "\n\n                                " + (usuarios[contador].datosPersonales).nombre);
                                localStorage.setItem("usuarios", JSON.stringify(usuarios));
                            })
                                .fail(function (respuesta) {
                                alert("Algo salio mal.");
                                alert(respuesta);
                            });
                            break;
                        }
                        contador++;
                    }
                });
            });
        };
        Manejadora.FiltrarPorPais = function () {
            var div = document.getElementById("divTabla");
            var pais = $("#cboPais").val();
            var parametros = "accion=filtrar&pais=" + pais;
            $.ajax({
                type: "POST",
                url: "./admin.php",
                dataType: "json",
                data: parametros,
                async: true
            })
                .done(function (respuesta) {
                var stringAux = "<table>\n                <tbody>\n                    <thead>\n                        <th>Nombre</th>\n                        <th>Apellido</th>\n                        <th>Edad</th>\n                        <th>DNI</th>\n                        <th>Pais<th>\n                        <th>Foto</th>\n                        <th>Accion</th>\n                    </thead>";
                for (var _i = 0, respuesta_1 = respuesta; _i < respuesta_1.length; _i++) {
                    var item = respuesta_1[_i];
                    stringAux += "<tr>\n                                <td>" + (item.datosPersonales).nombre + "</td>\n                                <td>" + (item.datosPersonales).apellido + "</td>\n                                <td>" + (item.datosPersonales).edad + "</td>\n                                <td>" + (item.datosCiviles).dni + "</td>\n                                <td>" + (item.datosCiviles).pais + "</td>\n                                <td><img src=\"./BACKEND/fotos/" + (item.datosCiviles).foto + "\" width=\"100px\" height=\"100px\"/></td>\n                                <td>\n                                    <input type=\"button\" value=\"Eliminar\" onclick=\"Entidades.Manejadora.EliminarCiudadano(" + (item.datosCiviles).dni + ")\"/>\n                                    <input type=\"button\" value=\"Modificar\" onclick=\"Entidades.Manejadora.ModificarCiudadano('" + (item.datosPersonales).nombre + "' , '" + (item.datosPersonales).apellido + "' , '" + (item.datosPersonales).edad + "' , '" + (item.datosCiviles).dni + "' , '" + (item.datosCiviles).pais + "')\"/>\n                                </td>\n                            </tr>";
                }
                stringAux += "</tbody>\n                        </table>";
                /*
                * Es necesario primero guardar toda la estructura del table en una variable auxiliar (en este caso stringAux) por que no se puede concatenar valores en la propiedad .innerHTML.
                */
                div.innerHTML = stringAux;
            });
        };
        Manejadora.PreVisualizar = function () {
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
        Manejadora.TraerUsuarios = function () {
            return JSON.parse(localStorage.getItem("usuarios"));
        };
        Manejadora.LimpiarLocalStorage = function () {
            localStorage.clear();
            alert("Se limpio el localStorage.");
        };
        Manejadora.ChequearLocalStorage = function () {
            if (localStorage.getItem("usuarios") == null) {
                localStorage.setItem("usuarios", "[]");
            }
        };
        return Manejadora;
    }());
    Entidades.Manejadora = Manejadora;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=Manejadora.js.map