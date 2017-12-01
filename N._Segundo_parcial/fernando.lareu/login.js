$(document).ready(function() {

    $("#form").bootstrapValidator({

        fields: {
            correo: {
                validators: {
                    notEmpty: {message: "Se debe completar este campo."},
                    emailAddress: {message: "eMail ingresado no valido."}
                }
            },
            password: {
                validators: {
                    notEmpty: {message: "Se debe completar este campo."},
                    stringLength: {min: 4 , max: 8 , message: "Entre 4 y 8 caracteres."}
                }
            }
        }
    })
    .on("success.form.bv" , function(form) {

        form.preventDefault();

        $.ajax({

            url: "./admin.php/email/clave",
            type: "POST",
            data: {

                "email": $("#txtCorreo").val(),
                "clave": $("#pswPass").val()
            },
            dataType: "json",
            async: true
        })
        .done(function(response) {

            if(response.valido == "true") {

                localStorage.setItem("token" , response.token);
                location.href = "./principal.html";
            }
            else {

                $("#divAlert").html("<div class='alert alert-danger'>Usuario no valido.</div>");
            }
        })
        .fail(function(response) {

            alert("Algo salio mal: " + response);
        });
    })
});

function Registro() {

    location.href = "./registro.html";
}