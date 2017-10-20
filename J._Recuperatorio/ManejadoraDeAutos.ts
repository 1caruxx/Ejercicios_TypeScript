/// <reference path="./node_modules/@types/jquery/index.d.ts"/>
/// <reference path="./Vehiculo.ts"/>
/// <reference path="./Auto.ts"/>

namespace Entidades {

    export class ManejadoraDeAutos {

        public static AgregarAuto() {

            let marca : string = <string>$("#cboMarca").val();
            let patente : string = <string>$("#txtPatente").val();
            let precio : number = parseInt(<string>$("#txtPrecio").val());
            let color : string = <string>$("#txtColor").val();

            let auto : Auto = new Auto(marca , patente , precio , color);

            let archivo : any = (<HTMLInputElement>document.getElementById("foto"));
            let formData : FormData = new FormData();
            formData.append("foto" , archivo.files[0]);
            formData.append("accion" , "agregar");
            formData.append("json" , auto.ToJSON());

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

                alert(respuesta);
            });
        }

        public static MostrarAutos() {

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
                                            <th>Marca</th>
                                            <th>Precio</th>
                                            <th>Color</th>
                                            <th>Patente</th>
                                            <th>Foto</th>
                                            <th>Accion</th>
                                        </thead>`;
                
                for(let item of respuesta) {

                    stringAux += `<tr>
                                      <td>${(item.datos).marca}</td>
                                      <td>${(item.datos).precio}</td>
                                      <td>${(item.estetica).color}</td>
                                      <td>${(item.datos).patente}</td>
                                      <td><img src="./BACKEND/fotos/${(item.estetica).foto}" width="50px" height="50px"/></td>
                                      <td>
                                          <input type="button" value="Eliminar" onclick="Entidades.ManejadoraDeAutos.EliminarAuto('${(item.datos).patente}')"/>
                                          <input type="button" value="Modificar" onclick="Entidades.ManejadoraDeAutos.ModificarAuto('${(item.datos).marca}' , '${(item.datos).precio}' , '${(item.estetica).color}' , '${(item.datos).patente}')"/>
                                      </td>
                                  </tr>`;
                }

                stringAux += `</tbody>
                            </table>`;

                div.innerHTML = stringAux;
            })
            .fail(function (respuesta) {

                alert("Algo salio mal.");
                alert(respuesta);
            });
        }
        
        public static EliminarAuto(patente:string) {

            let parametros = `accion=eliminar&patente=${patente}`;

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

        public static ModificarAuto(marca:string , precio:string , color:string , patente:string) {

            $("#cboMarca").val(marca);
            $("#txtPrecio").val(precio);
            $("#txtColor").val(color);

            $("#btnConfirmar").click(function() {

                let vMarca = <string>$("#cboMarca").val();
                let vPrecio = parseInt(<string>$("#txtPrecio").val());
                let vColor = <string>$("#txtColor").val();
    
                let auto = new Auto(vMarca , patente , vPrecio , vColor);
    
                let archivo : any = (<HTMLInputElement>document.getElementById("foto"));
                let formData : FormData = new FormData();
                formData.append("foto",archivo.files[0]);
                formData.append("accion", "modificar");
                formData.append("json", auto.ToJSON());
    
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

        public static FiltrarPorMarca() {

            var div= (<HTMLInputElement>document.getElementById("divTabla"));
            let marca = <string>$("#cboMarca").val();
            let parametros = `accion=filtrar&marca=${marca}`

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
                        <th>Marca</th>
                        <th>Precio</th>
                        <th>Color</th>
                        <th>Patente</th>
                        <th>Foto</th>
                        <th>Accion</th>
                    </thead>`;

                for(let item of respuesta) {

                stringAux += `<tr>
                                <td>${(item.datos).marca}</td>
                                <td>${(item.datos).precio}</td>
                                <td>${(item.estetica).color}</td>
                                <td>${(item.datos).patente}</td>
                                <td><img src="./BACKEND/fotos/${(item.estetica).foto}" width="50px" height="50px"/></td>
                                <td>
                                    <input type="button" value="Eliminar" onclick="Entidades.ManejadoraDeAutos.EliminarAuto('${(item.datos).patente}')"/>
                                    <input type="button" value="Modificar" onclick="Entidades.ManejadoraDeAutos.ModificarAuto('${(item.datos).marca}' , '${(item.datos).precio}' , '${(item.estetica).color}' , '${(item.datos).patente}')"/>
                                </td>
                            </tr>`;
                }

                stringAux += `</tbody>
                        </table>`;

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

        public static Eliminados() {

            var div= (<HTMLInputElement>document.getElementById("divTabla"));

            $.ajax({
                type : "POST",
                url : "./admin.php",
                dataType : "json",
                data : "accion=mostrarEliminados",
                async: true
            })
            .done(function(respuesta) {

                let stringAux = `<table>
                                    <tbody>
                                        <thead>
                                            <th>Marca</th>
                                            <th>Precio</th>
                                            <th>Color</th>
                                            <th>Patente</th>
                                        </thead>`;
                        
                for(let item of respuesta) {
        
                    stringAux += `<tr>
                                    <td>${(item.datos).marca}</td>
                                    <td>${(item.datos).precio}</td>
                                    <td>${(item.estetica).color}</td>
                                    <td>${(item.datos).patente}</td>
                                  </tr>`;
                }
        
                stringAux += `</tbody>
                            </table>`;

        
                div.innerHTML = stringAux;
            })
            .fail(function (respuesta) {

                alert("Algo salio mal.");
                alert(respuesta);
            });
        }
    }
}