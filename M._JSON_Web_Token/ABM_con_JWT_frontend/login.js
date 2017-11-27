$(document).ready(function () {

    $("#form").bootstrapValidator({

        fields: {
            usuario: {
                validators: {
                    emailAddress: { message: "Correo intoducido no valido." },
                    notEmpty: { message: "Introduzca su correo." }
                }
            },

            clave: {
                validators: {
                    notEmpty: { message: "Introduzca su contraseña." }
                }
            }
        }
    })
    .on("success.form.bv", function (form) {

        form.preventDefault();
        $.ajax({

            url:"./admin.php/login",
            type:"POST",
            data: {
                "correo": $('#usuario').val(),
                "clave": $('#clave').val()
            },
            dataType: "text"
        })
        .done(function(respuesta) {

            if(respuesta != "false") {

                localStorage.setItem("token" , respuesta);
                location.href="./listado.html";
            }
            else {
                alert("Usuario inexistente.");
                localStorage.clear();
                location.href="./";
            }
        })
        .fail(function(respuesta) {

            alert("Algo salio mal: " + respuesta);
        })
    });
});