$(document).ready(function() {

    $("#form").bootstrapValidator({

        fields: {
            apellido: {
                validators: {
                    notEmpty: {message: "Se debe completar este campo."},
                    stringLength: {max: 15 , message:"Se admiten hasta un maximo de 15 caracteres."}
                }
            },
            nombre: {
                validators: {
                    notEmpty: {message: "Se debe completar este campo."},
                    stringLength: {max: 10 , message:"Se admiten hasta un maximo de 10 caracteres."}
                }
            },
            email: {
                validators: {
                    notEmpty: {message: "Se debe completar este campo."},
                    emailAddress: {message: "eMail ingresado no valido."}
                }
            },
            legajo: {
                validators: {
                    notEmpty: {message: "Se debe completar este campo."},
                    integer: {message: "Se debe introducir un numero entero."},
                    stringLength: {min: 3 , max: 6 , message:"Entre 3 y 6 caracteres."}
                }
            },
            foto: {
                validators: {
                    notEmpty: {message: "Se debe completar este campo."},

                    file: {extension: "jpg,png" , maxSize: 850*1024 , message: "Solo se admiten archivos con formato .jpg y .png. y de hasta 850 KB"}
                }
            },
            clave: {
                validators: {
                    notEmpty: {message: "Se debe completar este campo."},
                    stringLength: {min: 4 , max: 8 , message:"Entre 4 y 8 caracteres."}

                }
            },
            confirmar: {
                validators: {
                    notEmpty: {message: "Se debe completar este campo."},
                    stringLength: {min: 4 , max: 8 , message:"Entre 4 y 8 caracteres."},
                    identical: {field: "clave" , message: "Debe coincidir con el campo clave."}
                }
            }
        }
    })
    .on("success.form.bv" , function(form) {

        form.preventDefault();

        /*let archivo = document.getElementById("filFoto");
        let formData  = new FormData();
        formData.append("foto" , archivo.files[0]);
        formData.append("nombre" , $("#txtNombre").val());
        formData.append("apellido" , $("#txtApellido").val());
        formData.append("email" , $("#txtCorreo").val());
        formData.append("legajo" , $("#txtLegajo").val());
        formData.append("perfil" , $("#cboPerfil").val());
        formData.append("clave" , $("#pswPass").val());*/

        var formData = new FormData($(this)[0]);
        var archivo = document.getElementById("filFoto");
        formData.append("foto", archivo.files[0]);

        $.ajax({
            url: "./admin.php/",
            type: "POST",
            data: formData,
            dataType: "text",
            cache: false,
            contentType: false,
            processData: false,
            async: true
        })
        .done(function(response) {

            alert(response);
            location.href = "./login.html";
        })
        .fail(function(response) {

            alert("Algo salio mal: " + response);
        });
    })
});