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

            $(document).ready(function() {

                Manejadora.ChequearLocalStorage();

                let archivo : any = (<HTMLInputElement>document.getElementById("foto"));
                let formData : FormData = new FormData();
                formData.append("foto" , archivo.files[0]);
                formData.append("accion" , "agregar");

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

                    ciudadano.foto = respuesta;
                    /*
                     * Estas tres lineas de codigo tienen que estar dentro del evento .done() ya que este puede dispararse en cualquier momento, incluso despues
                        * de que estas lineas se ejecuten, por lo que el atributo foto de la instancia ciudadano estara seteada como undefinid. 
                     */
                    let usuarios = Manejadora.TraerUsuarios();
                    usuarios.push(JSON.parse(ciudadano.ToJSON()));
                    localStorage.setItem("usuarios" , JSON.stringify(usuarios));
                    alert("Se a agregado correctamente.");
                })
                .fail(function() {

                    alert("Algo salio mal.");
                });
            });
        }

        public static MostrarCiudadanos() {

            /*
             * No se usa la sintaxis de jQuery por que esta no permite acceder a la propiedad innerHTML.
             */
            var div= (<HTMLInputElement>document.getElementById("divTabla"));

            $(document).ready(function() {

                Manejadora.ChequearLocalStorage()

                let usuarios = Manejadora.TraerUsuarios();

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
                
                for(let item of usuarios) {

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
            });
        }
        
        public static EliminarCiudadano(dni:string) {

            $(document).ready(function() {

                let usuarios = Manejadora.TraerUsuarios();
                let contador : number = 0;

                for(let item of usuarios) {

                    if((item.datosCiviles).dni == parseInt(dni)) {
                        
                        var foto = (item.datosCiviles).foto;
                        usuarios.splice(contador , 1);
                        break;
                    }

                    contador++;
                }

                localStorage.setItem("usuarios" , JSON.stringify(usuarios));
                let parametros = `accion=eliminar&foto=${foto}`;

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
                let contador : number = 0;
    
                let ciudadano = new Ciudadano(vNombre , vApellido , vEdad , parseInt(dni) , vPais);
    
                $(document).ready(function() {

                    let usuarios = Manejadora.TraerUsuarios();
                    
                    for(let item of usuarios) {

                        alert((item.datosCiviles).dni);
                    
                        if((item.datosCiviles).dni == parseInt(dni)) {

                            let foto = (item.datosCiviles).foto;
                            
                            let archivo : any = (<HTMLInputElement>document.getElementById("foto"));
                            let formData : FormData = new FormData();
                            formData.append("foto",archivo.files[0]);
                            formData.append("accion", "modificar");
                            formData.append("nombreFoto", foto);

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

                                ciudadano.foto = respuesta;
                                //usuarios[contador] = ciudadano;
                                usuarios.splice(contador , 1 , ciudadano);
                                alert(`Contador: ${contador}\n
                                ${(usuarios[contador].datosPersonales).nombre}`);
                                localStorage.setItem("usuarios" , JSON.stringify(usuarios));
                            })
                            .fail(function(respuesta) {
                
                                alert("Algo salio mal.");
                                alert(respuesta);
                            });

                            break;
                        }          
                        
                        contador++;
                    }
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

        private static TraerUsuarios() {

            return JSON.parse(<any>localStorage.getItem("usuarios"));
        }

        public static LimpiarLocalStorage() {

            localStorage.clear();
            alert("Se limpio el localStorage.");
        }

        private static ChequearLocalStorage() {
            
            if(localStorage.getItem("usuarios") == null) {

                localStorage.setItem("usuarios" , "[]");
            }
        }
    }
}