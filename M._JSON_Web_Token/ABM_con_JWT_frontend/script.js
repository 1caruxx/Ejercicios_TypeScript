function Agregar() {

    $("#form").boostrapValidator({

        fields: {
            


        }
    })

}

function Imprimir(listado) {

    var stringAuxiliar = `<table class="table">
    <thead>
        <tr>
            <th>Perfil</th>
            <th>Correo</th>
            <th>Clave</th>
            <th>Imagen</th>
            <th>Accion</th>
        </tr>
    </thead>`;

    for(let item of listado) {

    stringAuxiliar += `<tr>
                           <td>${item._perfil}</td>
                           <td>${item._correo}</td>
                           <td>${item._clave}</td>
                           <td><img src="./src/BACKEND/img/${item._foto}" width="50px" height="50px/></td>
                           <td>
                               <div class="col-md-4">
                                   <button type="button" class="btn btn-danger" onclick="Eliminar('${item._correo}')">Eliminar</button>
                                   <button type="button" class="btn btn-warning">Modificar</button>
                               </div>
                           </td>
                       </tr>`;
    }
    
    $("#divTabla").html(stringAuxiliar);
}

function Mostrar() {

    $.ajax({

        type: "GET",
        url: "./admin.php/BD/listar",
        headers: {

            token: localStorage.getItem("token")
        },
        dataType: "json",
        async: true
    })
    .done(function(response) {

        Imprimir(response.usuarios);
    })
    .fail(function(response) {

        alert("Algo salio mal: " + response);
    });
}

function FiltrarPorPerfil() {

    $.ajax({

        type: "GET",
        url: "./admin.php/BD/listar",
        headers: {
        
            token: localStorage.getItem("token")
        },
        dataType: "json",
        async: true
    })
    .done(function(response) {

        let filtrado = (response.usuarios).filter(function(item) {

            return item._perfil == $("#cboPerfil").val();
        });

        Imprimir(filtrado);
    })
    .fail(function(response) {
        
        alert("Algo salio mal: " + response);
    });
}

function Eliminar(correo) {

    $.ajax({

        type: "DELETE",
        url: "./admin.php/BD/baja",
        headers: {
            token: localStorage.getItem("token")
        },
        data: "correo="+correo,
        dataType: "text",
        async: true
    })
    .done(function(response) {

        alert(response);
    })
    .fail(function(response) {

        alert("Algo salio mal: " + response);
    });
}

function Deslogear() {

    localStorage.clear();
    location.href="./";
}