var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Entidades;
(function (Entidades) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, apellido, edad) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
        }
        Persona.prototype.ToJSON = function () {
            /*
             * El equivalente seria return `{"nombre":"${this.nombre}" , "apellido":"${this.apellido}" , "edad":${this.edad}}`
             * No puede haber llaves que no correspondan.
             */
            return JSON.stringify(this);
        };
        return Persona;
    }());
    Entidades.Persona = Persona;
})(Entidades || (Entidades = {}));
/// <reference path="./Persona.ts"/>
var Entidades;
(function (Entidades) {
    var Ciudadano = /** @class */ (function (_super) {
        __extends(Ciudadano, _super);
        function Ciudadano(nombre, apellido, edad, dni, pais, foto) {
            var _this = _super.call(this, nombre, apellido, edad) || this;
            _this.dni = dni;
            _this.pais = pais;
            if (foto != "" && foto) {
                _this.foto = foto;
            }
            return _this;
        }
        Ciudadano.prototype.ToJSON = function () {
            /*
             * Las claves del JSON siempre entrecomilladas.
             * Los valores tambien entrecomillados, incluso aunque se trate de una variable que contenga un string.
             * Si es un valor numerico, nunca va entrecomillado.
             */
            return "{\"datosPersonales\":" + _super.prototype.ToJSON.call(this) + " , \"datosCiviles\":{\"dni\":" + this.dni + " , \"foto\":\"" + this.foto + "\" , \"pais\":\"" + this.pais + "\"}}";
        };
        return Ciudadano;
    }(Entidades.Persona));
    Entidades.Ciudadano = Ciudadano;
})(Entidades || (Entidades = {}));
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
            var archivo = document.getElementById("foto");
            var formData = new FormData();
            formData.append("foto", archivo.files[0]);
            formData.append("accion", "agregar");
            formData.append("json", ciudadano.ToJSON());
            $.ajax({
                type: "POST",
                url: "./admin.php",
                dataType: "text",
                /*
                 * Si no se ponen estas tres lineas, en consola se vera un errore de la libreria jQuery
                 */
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
        Manejadora.MostrarCiudadanos = function () {
            /*
             * No se usa la sintaxis de jQuery por que esta no permite acceder a la propiedad innerHTML.
             */
            var div = document.getElementById("divTabla");
            $.ajax({
                type: "POST",
                url: "./admin.php",
                dataType: "json",
                data: "accion=listar",
                async: true
            })
                .done(function (respuesta) {
                var stringAux = "<table>\n                                    <tbody>\n                                        <thead>\n                                            <th>Nombre</th>\n                                            <th>Apellido</th>\n                                            <th>Edad</th>\n                                            <th>DNI</th>\n                                            <th>Pais<th>\n                                            <th>Foto</th>\n                                            <th>Accion</th>\n                                        </thead>";
                for (var _i = 0, respuesta_1 = respuesta; _i < respuesta_1.length; _i++) {
                    var item = respuesta_1[_i];
                    stringAux += "<tr>\n                                      <td>" + (item.datosPersonales).nombre + "</td>\n                                      <td>" + (item.datosPersonales).apellido + "</td>\n                                      <td>" + (item.datosPersonales).edad + "</td>\n                                      <td>" + (item.datosCiviles).dni + "</td>\n                                      <td>" + (item.datosCiviles).pais + "</td>\n                                      <td><img src=\"./BACKEND/fotos/" + (item.datosCiviles).foto + "\" width=\"100px\" height=\"100px\"/></td>\n                                      <td>\n                                          <input type=\"button\" value=\"Eliminar\" onclick=\"Entidades.Manejadora.EliminarCiudadano(" + (item.datosCiviles).dni + ")\"/>\n                                          <input type=\"button\" value=\"Modificar\" onclick=\"Entidades.Manejadora.ModificarCiudadano('" + (item.datosPersonales).nombre + "' , '" + (item.datosPersonales).apellido + "' , '" + (item.datosPersonales).edad + "' , '" + (item.datosCiviles).dni + "' , '" + (item.datosCiviles).pais + "')\"/>\n                                      </td>\n                                  </tr>";
                }
                stringAux += "</tbody>\n                            </table>";
                /*
                 * Es necesario primero guardar toda la estructura del table en una variable auxiliar (en este caso stringAux) por que no se puede concatenar valores en la propiedad .innerHTML.
                 */
                div.innerHTML = stringAux;
            })
                .fail(function (respuesta) {
                alert("Algo salio mal.");
                alert(respuesta);
            });
        };
        Manejadora.EliminarCiudadano = function (dni) {
            var parametros = "accion=eliminar&dni=" + dni;
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
                var ciudadano = new Entidades.Ciudadano(vNombre, vApellido, vEdad, parseInt(dni), vPais);
                var archivo = document.getElementById("foto");
                var formData = new FormData();
                formData.append("foto", archivo.files[0]);
                formData.append("accion", "modificar");
                formData.append("json", ciudadano.ToJSON());
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
                for (var _i = 0, respuesta_2 = respuesta; _i < respuesta_2.length; _i++) {
                    var item = respuesta_2[_i];
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
        return Manejadora;
    }());
    Entidades.Manejadora = Manejadora;
})(Entidades || (Entidades = {}));
