/* 
 * Aun no existe un archivo de definicion para el pliugin de bootstrap
    * validator para TypeScript, por lo que debere programar en js
 * Primero debere esperar a que todos los elementos sean cargados en mi pagina
    * 
*/
$(document).ready(function() {

    $("#form").bootstrapValidator({
        
        // feedbackIcons es una clave que hace referencia
        feedbackIcons: {

            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove'
        },
        /*
         * La clave fields hace referencia a los campos a los cuales 
            * quiero hacer las validaciones
         */
        fields: {

            //Las claves seran los atributos names de los elementos de mi DOM.
            txtNombre: {
                validators: {
                    notEmpty: {message: "Introduzca el nombre de su usuario."}
                }
            },

            password: {
                validators: {
                    notEmpty: {message: "Introduzca su contraseña."}
                }
            }
        }
    })
    .on("success.form.bv" , function() {

        alert("Todo bien.");
    });
});