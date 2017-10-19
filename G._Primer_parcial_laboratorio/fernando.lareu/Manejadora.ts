/// <reference path="./node_modules/@types/jquery/index.d.ts"/>
/// <reference path="./Persona.ts"/>
/// <reference path="./Ciudadano.ts"/>

namespace Entidades {

    export class Manejadora {

        public static AgregarCiudadano() {

            let nombre : string = <string>$("#txtNombre").val();
            let apellido : string = <string>$("#txtApellido").val();
            let edad : number = parseInt(<string>$("#txtEdad").val());
            let dni : number = parseInt(<string>$("#txtDni").val());
            let pais : string = <string>$("#cboPais").val();
            let ciudadano : Ciudadano = new Ciudadano(nombre , apellido , edad , dni , pais);

            let archivo : any = (<HTMLInputElement>document.getElementById("foto"));
            let formData : FormData = new FormData();
            formData.append("foto" , archivo.files[0]);
            formData.append("accion" , "agregar");
            formData.append("json" , ciudadano.ToJSON());

            $.ajax({

                type : "POST",
                url : "./admin.php",
                dataType : "text",
                /*
                 * Si no se ponen estas tres lineas, en consola se vera un errore de la libreria jQuery
                 */ 
                cache: false,
                contentType: false,
                processData: false,
                data : formData,
                async : true
            })
            .done(function(respuesta) {

                alert(respuesta);
            });
        }

        public static MostrarCiudadanos() {

            /*
             * No se usa la sintaxis de jQuery por que esta no permite acceder a la propiedad innerHTML.
             */
            var div= (<HTMLInputElement>document.getElementById("divTabla"));

            $.ajax({
                type : "POST",
                url : "./admin.php",
                dataType : "json",
                data : "accion=listar",
                async: true
            })
            .done(function(respuesta) {

                let stringAux = `<table>
                                    <tbody>
                                        <thead>
                                            <th>Nombre</th>
                                            <th>Apellido</th>
                                            <th>Edad</th>
                                            <th>DNI</th>
                                            <th>Pais<th>
                                            <th>Foto</th>
                                            <th>Accion</th>
                                        </thead>`;
                
                for(let item of respuesta) {

                    stringAux += `<tr>
                                      <td>${(item.datosPersonales).nombre}</td>
                                      <td>${(item.datosPersonales).apellido}</td>
                                      <td>${(item.datosPersonales).edad}</td>
                                      <td>${(item.datosCiviles).dni}</td>
                                      <td>${(item.datosCiviles).pais}</td>
                                      <td><img src="./BACKEND/fotos/${(item.datosCiviles).foto}" width="100px" height="100px"/></td>
                                      <td>
                                          <input type="button" value="Eliminar" onclick="Entidades.Manejadora.EliminarCiudadano(${(item.datosCiviles).dni})"/>
                                          <input type="button" value="Modificar" onclick="Entidades.Manejadora.ModificarCiudadano('${(item.datosPersonales).nombre}' , '${(item.datosPersonales).apellido}' , '${(item.datosPersonales).edad}' , '${(item.datosCiviles).dni}' , '${(item.datosCiviles).pais}')"/>
                                      </td>
                                  </tr>`;
                }

                stringAux += `</tbody>
                            </table>`;
                /*
                 * Es necesario primero guardar toda la estructura del table en una variable auxiliar (en este caso stringAux) por que no se puede concatenar valores en la propiedad .innerHTML.
                 */
                div.innerHTML = stringAux;
            })
            .fail(function (respuesta) {

                alert("Algo salio mal.");
                alert(respuesta);
            });
        }
        
        public static EliminarCiudadano(dni:string) {

            let parametros = `accion=eliminar&dni=${dni}`;

            $.ajax({
                type : "POST",
                url : "./admin.php",
                dataType : "text",
                data : parametros,
                async : true
            })
            .done(function(respuesta) {

                alert(respuesta);
            })
            .fail(function(respuesta) {

                alert("Algo salio mal.");
                alert(respuesta);
            });
        }

        public static ModificarCiudadano(nombre:string , apellido:string , edad:string , dni:string , pais:string) {

            $("#txtNombre").val(nombre);
            $("#txtApellido").val(apellido);
            $("#txtEdad").val(edad);
            $("#cboPais").val(pais);

            $("#btnConfirmar").click(function() {

                let vNombre = <string>$("#txtNombre").val();
                let vApellido = <string>$("#txtApellido").val();
                let vEdad = parseInt(<string>$("#txtEdad").val());
                let vPais = <string>$("#cboPais").val();
    
                let ciudadano = new Ciudadano(vNombre , vApellido , vEdad , parseInt(dni) , vPais);
    
                let archivo : any = (<HTMLInputElement>document.getElementById("foto"));
                let formData : FormData = new FormData();
                formData.append("foto",archivo.files[0]);
                formData.append("accion", "modificar");
                formData.append("json", ciudadano.ToJSON());
    
                $.ajax({
                    type : "POST",
                    url : "./admin.php",
                    dataType : "text",
                    cache: false,
                    contentType: false,
                    processData: false,
                    data : formData,
                    async : true
                })
                .done(function(respuesta) {
                    
                    
                })
                .fail(function(respuesta) {
    
                    alert("Algo salio mal.");
                    alert(respuesta);
                });
            });
        }

        public static FiltrarPorPais() {

            var div= (<HTMLInputElement>document.getElementById("divTabla"));
            let pais = <string>$("#cboPais").val();
            let parametros = `accion=filtrar&pais=${pais}`

            $.ajax({
                type : "POST",
                url : "./admin.php",
                dataType : "json",
                data : parametros,
                async : true
            })
            .done(function(respuesta) {

                let stringAux = `<table>
                <tbody>
                    <thead>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                        <th>DNI</th>
                        <th>Pais<th>
                        <th>Foto</th>
                        <th>Accion</th>
                    </thead>`;

                for(let item of respuesta) {

                stringAux += `<tr>
                                <td>${(item.datosPersonales).nombre}</td>
                                <td>${(item.datosPersonales).apellido}</td>
                                <td>${(item.datosPersonales).edad}</td>
                                <td>${(item.datosCiviles).dni}</td>
                                <td>${(item.datosCiviles).pais}</td>
                                <td><img src="./BACKEND/fotos/${(item.datosCiviles).foto}" width="100px" height="100px"/></td>
                                <td>
                                    <input type="button" value="Eliminar" onclick="Entidades.Manejadora.EliminarCiudadano(${(item.datosCiviles).dni})"/>
                                    <input type="button" value="Modificar" onclick="Entidades.Manejadora.ModificarCiudadano('${(item.datosPersonales).nombre}' , '${(item.datosPersonales).apellido}' , '${(item.datosPersonales).edad}' , '${(item.datosCiviles).dni}' , '${(item.datosCiviles).pais}')"/>
                                </td>
                            </tr>`;
                }

                stringAux += `</tbody>
                        </table>`;
                /*
                * Es necesario primero guardar toda la estructura del table en una variable auxiliar (en este caso stringAux) por que no se puede concatenar valores en la propiedad .innerHTML.
                */
                div.innerHTML = stringAux;
            })
        }

        public static PreVisualizar() {

            let archivo : any = (<HTMLInputElement>document.getElementById("foto"));
            let formData : FormData = new FormData();
            formData.append("foto",archivo.files[0]);
            formData.append("accion", "previsualizar");

            $.ajax({
                type : "POST",
                url : "./admin.php",
                dataType : "text",
                cache: false,
                contentType: false,
                processData: false,
                data : formData,
                async: true
            })
            .done(function (resultado) {

                $("#imagen").attr("src" , resultado);
            });
        }
    }
}