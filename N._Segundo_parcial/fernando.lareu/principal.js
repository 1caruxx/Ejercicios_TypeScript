//<div class="col-md-7">
//</div>

$(document).ready(function () {

    $("#form").bootstrapValidator({

        fields: {
            nombre: {
                validators: {
                    notEmpty: { message: "Introduzca el nombre del producto." },
                    stringLength: {min: 3 , max: 15, message: "Solo se pueden introducir entre 3 hasta 15 caracteres." }
                }
            },
            precio: {
                validators: {
                    notEmpty: { message: "Introduzca el precio." },
                    integer: { message: "Debe ser un numero entero." },
                }
            }
        }
    })
    .on("success.form.bv", function (form) {

        form.preventDefault();
        $.ajax({

            url: "./admin.php/productos/",
            type: "POST",
            data: {
                "nombre": $('#txtNombre').val(),
                "precio": $('#txtPrecio').val()
            },
            dataType: "text",
            async: true
        })
        .done(function (respuesta) {

            alert(respuesta);
        })
        .fail(function (respuesta) {

            alert("Algo salio mal: " + respuesta);
        });
    });
});