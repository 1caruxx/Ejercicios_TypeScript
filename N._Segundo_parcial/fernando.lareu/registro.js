$(document).ready(function () {

    $("#form").bootstrapValidator({

        fields: {
            apellido: {
                validators: {
                    notEmpty: { message: "Introduzca su su apellido." },
                    stringLength: { max: 15, message: "Solo se pueden introducir hasta 15 caracteres." }
                }
            },
            nombre: {
                validators: {
                    notEmpty: { message: "Introduzca su nombre." },
                    stringLength: { max: 10, message: "Solo se pueden introducir hasta 10 caracteres." }
                }
            },
            email: {
                validators: {
                    notEmpty: { message: "Introduzca su correo." },
                    emailAddress: { message: "Correo introducido no valido." }
                }
            },
            legajo: {
                validators: {
                    notEmpty: { message: "Introduzca su legajo." },
                    integer: { message: "Debe ser un numero entero." },
                    stringLength: { min: 3, max: 6, message: "Debe estar entre los 3 y 6 digitos." }

                }
            },
            foto: {
                validators: {
                    notEmpty: { message: "Introduzca su legajo." },
                    file: { extension: "jpg", extension: "jpg", message: "Solo se admiten formatos JPG y PNG." },
                    file: { maxSize: 950, message: "No puede pesar mas de 950 bytes" }
                }
            },
            password: {
                validators: {
                    notEmpty: { message: "Introduzca su contraseña." },
                    stringLength: { min: 4, max: 8, message: "La contraseña debe tener entre 4 y 8 caracteres." },
                }
            },
            confirm: {
                validators: {
                    notEmpty: { message: "Introduzca su contraseña." },
                    stringLength: { min: 4, max: 8, message: "La contraseña debe tener entre 4 y 8 caracteres." },
                    different: { field: "password", message: "Los campos no coinciden." }
                }
            }
        }
    })
        .on("success.form.bv", function (form) {

            form.preventDefault();

            let archivo = $("#file").val();
            let formData = new FormData();
            formData.append("foto" , archivo.files[0]);
            formData.append("apellido" , $('#txtApellido').val());
            formData.append("nombre" , $('#txtNombre').val());
            formData.append("email" , $('#txtEmail').val());
            formData.append("legajo" , $('#txtLegajo').val());
            formData.append("perfil" , $('#cboPerfil').val());
            formData.append("clave" , $('#pswPass').val());
           
            $.ajax({

                url: "./admin.php/productos/",
                type: "POST",
                data: formData,
                dataType: "text",
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