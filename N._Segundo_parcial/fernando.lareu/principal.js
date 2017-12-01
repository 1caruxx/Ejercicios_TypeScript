$(document).ready(function () {

    var contenido = `<div class="table-responsive">
                         <table class="table table-bordered">
                            <tr>
                                <th>ID</th>
                                <th>APELLIDO</th>
                                <th>NOMBRE</th>
                                <th>E-MAIL</th>   
                                <th>FOTO</th>   
                                <th>LEGAJO</th>   
                                <th>PERFIL</th>             
                            </tr>`;

    $.ajax({
        url: "./admin.php",
        type: "GET",
        dataType: "json",
        async: true
    })
        .done(function (response) {

            for (let item of response) {

                contenido += `<tr>
                             <td>${item.id}</td>
                             <td>${item.apellido}</td>
                             <td>${item.nombre}</td>
                             <td>${item.email}</td>
                             <td><img src="./img/${item.foto}" width="50px" eight="50px"/></td>
                             <td>${item.legajo}</td>
                             <td>${item.perfil}</td>
                          </tr>`;
            }

            contenido += `</table>
                    </div>`;

            $("#divTabla").html(contenido);
        })
        .fail(function (response) {

            alert("Algo salio mal: " + response);
        });

    MostrarProductos();

    $("#form").bootstrapValidator({
        fields: {
            nombre: {
                validators: {
                    notEmpty: { message: "Se debe completar este campo." },
                    stringLength: { min: 3, max: 15, message: "Entre 3 y 15 caracteres." }
                }
            },
            precio: {
                validators: {
                    notEmpty: { message: "Se debe completar este campo." },
                    numeric: { message: "El campo debe ser numerico." }
                }
            }
        }
    })
        .on("success.form.bv", function (form) {

            form.preventDefault();

            if($("#btnEnviar").html() == "Enviar") {

                $.ajax({

                    url: "./admin.php/productos/",
                    type: "POST",
                    data: {

                        nombre: $("#txtNombre").val(),
                        precio: $("#txtPrecio").val()
                    },
                    headers: {token: localStorage.getItem("token")},
                    dataType: "text",
                    async: true
                })
                .done(function (response) {

                    console.log(response);

                    alert(response);
                    MostrarProductos();
                })
                .fail(function (response) {

                    alert("Algo salio mal: " + response);
                });
            }
            else {

                $.ajax({

                    url: "./admin.php/productos/",
                    type: "PUT",
                    data: {

                        id: $("#btnEnviar").val(),
                        nombre: $("#txtNombre").val(),
                        precio: $("#txtPrecio").val()
                    },
                    headers: {token: localStorage.getItem("token")},
                    dataType: "text",
                    async: true
                })
                .done(function (response) {

                    alert(response);
                    MostrarProductos();
                    $("#btnEnviar").html("Enviar");
                    $("#btnEnviar").val("");
                })
                .fail(function (response) {

                    alert("Algo salio mal: " + response);
                });
            }
        });
});

function MostrarProductos() {

    var contenido = `<div class="col-md-6">
    <div class="table-responsive">
                              <table class="table table-bordered">
                                  <tr>
                                     <th>ID</th>
                                     <th>NOMBRE</th>
                                     <th>PRECIO</th>  
                                     <th>ACCION</th>
                                  </tr>`;

    $.ajax({

        url: "./admin.php/productos",
        type: "GET",
        dataType: "json",
        async: true
    })
        .done(function (response) {

            console.clear();

            let promedioPrecio = response.reduce(function(valor , item) {

                return (valor + parseFloat(item.precio));
            },0)/response.length;
                
            console.log("El promedio de los precios de los productos es: " + promedioPrecio);  

            for (let item of response) {

                contenido += `<tr>
                                   <td>${item.id}</td>
                                   <td>${item.nombre}</td>
                                   <td>${item.precio}</td>
                                   <td>
                                       <div class="row">
                                           <div class="col-md-3">
                                               <button type="button" class="btn btn-danger" onclick="Eliminar(${item.id})">Eliminar</button>
                                           </div>
                                           <div class="col-md-3">
                                               <button type="button" class="btn btn-info" onclick="Modificar('${item.id}' , '${item.nombre}' , '${item.precio}')">Modificar</button>
                                           </div>
                                       </div> 
                                   </td>
                               </tr>`;
            }

            contenido += `</table>
                    </div>
                </div>`;

            $("#divTablaProductos").html(contenido);
        })
        .fail(function (response) {

            alert("Algo salio mal: " + response);
        });
}

function Eliminar(id) {

    $.ajax({
        url: "./admin.php/productos/",
        type: "DELETE",
        data: {id: id},
        headers: {token: localStorage.getItem("token")},
        dataType: "text",
        async: true
    })
        .done(function (response) {

            console.log(response);
            alert(response);
            MostrarProductos();
        })
        .fail(function (response) {

            alert("Algo salio mal: " + response);
        });
}

function Modificar(id, nombre, precio) {

    $("#txtNombre").val(nombre);
    $("#txtPrecio").val(precio);
    $("#btnEnviar").html("Confirmar");
    $("#btnEnviar").val(id);
}