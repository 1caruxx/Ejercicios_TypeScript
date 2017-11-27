$(document).ready(function () {

    $("#form").bootstrapValidator({

        fields: {
            correo: {
                validators: {
                    notEmpty: { message: "Introduzca su correo." },
                    emailAddress: { message: "Correo introducido no valido." }
                }
            },
            password: {
                validators: {
                    notEmpty: {message: "Introduzca su contraseña." },
                    stringLength: {min: 4, max: 8, message: "La contraseña debe tener entre 4 y 8 caracteres." }
                }
            }
        }
    })
    .on("success.form.bv", function (form) {

        form.preventDefault();
        $.ajax({

            url: "./admin.php/email/clave",
            type: "POST",
            data: {
                "correo": $('#txtCorreo').val(),
                "clave": $('#pswPass').val()
            },
            dataType: "json",
            async: true
        })
        .done(function (respuesta) {

            if (respuesta.valido != "false") {

                location.href = "./principal.html";
            }
            else {
                alert("Usuario inexistente.");
            }
        })
        .fail(function (respuesta) {

            alert("Algo salio mal: " + respuesta);
        });
    });
});

function Registro() {

    location.href = "./registro.html";
}