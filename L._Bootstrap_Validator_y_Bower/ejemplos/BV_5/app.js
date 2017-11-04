//AL TERMINAR DE CARGAR TODO EL DOM, SE ASIGNAN LOS MANEJADORES DE EVENTOS
$(document).ready(function () {
 
    $("#loginForm").bootstrapValidator({

        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove'
        },
        fields: {
            usuario: {
                validators: {
                    notEmpty: {
                        message: 'El nombre de usuario es requerido!!!'
                    },
                    stringLength: {
                        min: 3,
                        message: 'El mínimo de caracteres admitido es de 3!!!'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'La contraseña es requerida!!!'
                    },
                    stringLength: {
                        min: 6,
                        max: 20,
                        message: 'Por favor, ingrese entre 6 y 20 caracteres!!!'
                    }
                }
            },
            datetimepicker: {
                validators: {
                    notEmpty: {
                        message: 'La fecha de nacimiento es requerida y no puede estar vacia!!!'
                    },
                    date: {
                        format: 'DD-MM-YYYY',
                        message: 'La fecha de nacimiento no es válida!!!'
                    }
                }
            }
        }
    })
    //SI SUPERA TODAS LAS VALIDACIONES, SE PROVOCA EL SUBMIT DEL FORM
    .on('success.form.bv', function (e) {

        //AGREGO CLASE A LA CLASE DEL ALERT, PARA QUE SE 'OCULTE'
        $("#success_message").addClass("hidden");
        
        //AGREGO CLASE A LA CLASE DEL SPINNER, PARA QUE 'GIRE'
        $("#spinner").addClass("fa-spin");

        //AGREGO CLASE A LA CLASE DE LOS BOTONES, PARA QUE SE 'BLOQUEEN'
        $("#btnEnviar").addClass("disabled");
        $("#btnLimpiar").addClass("disabled");
        
        // Prevent form submission (evita que se envíe el form por default)
        e.preventDefault();
        
        //obtener instancia del form
        //var $form = $(e.target);

        //obtener la instancia de BootstrapValidator
        //var bv = $form.data('bootstrapValidator');            

        //usando $.post
        /*
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        */

        $.ajax({
            url:"../BACKEND/pagina.php",
            type:"POST",
            data: {
                "usuario": $('#usuario').val(),
                "password": $('#password').val(), 
                "datetimepicker":$('#datetimepicker').val()
            },
            dataType:'text',
            success: function(res){

                //REMUEVO LA CLASE DEL SPINNER, PARA QUE 'FRENE'
                $("#spinner").removeClass("fa-spin");

                //REMUEVO LA CLASE DEL ALERT, PARA QUE SE MUESTRE
                $("#success_message").removeClass("hidden");

                //CAMBIO LA CLASE DEL ALERT, PARA QUE SE MUESTRE
                $("#btnEnviar").removeClass("disabled");
                $("#btnLimpiar").removeClass("disabled");

                //LIMPIO EL FORMULARIO
                $("#btnLimpiar").click();
                
                console.log(res);
            }

        });
    });

    $('#datetimepicker').datetimepicker();
        
});

