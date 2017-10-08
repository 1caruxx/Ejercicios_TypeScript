/// <reference path="./node_modules/@types/jquery/index.d.ts"/>
/// <reference path="./Usuario.ts"/>


$(document).ready(function() {

    /*
     * Inicializo en una parte de la memoria del pc del cliente los valores.
     * Recibe dos parametros, una clave y un valor, siempre en formato de string.
     * El valor sera un JSON valido que corresponda a la clase que haya creado.
     * Los parametros que recibe este metodo son STRINGs.
     * Con esto establecemos nuetroprimner JSON valido.
     * Se almacena fisicamente en un archi, dios sabe donde
     */
    localStorage.setItem("usuarios" , '{"_nombre":"admin" , "_apellido":"admin" , "_mail":"admin@admin.com" , "_contrasenia":"1234"}');
   
    /*
     * localStorage() Hace lo contrario, yo le paso una clave y me retorna un string con formato JSON
     */
    $("#btnAceptar").click(function() 
    {
        console.log(localStorage.getItem("usuarios"));
        var stringAux:any = localStorage.getItem("usuarios") ;
        var usuario:any|null = JSON.parse(stringAux);

        console.log(usuario._nombre);

        var nombre: string = ($("#txtNombre").val).toString();
        var apellido: string = ($("#txtApellido").val).toString();
        var mail: any = ($("#emlMail").val());
        var contrasenia: string = ($("#pswContrasenia").val).toString();
    
        var usuario2:Entidades.Usuario = new Entidades.Usuario(nombre , apellido , mail , contrasenia);
        
        console.log(usuario2._mail);

        if(usuario2._mail == usuario._mail) {

            
            alert("Exito");
        }
        else {
            alert("ups");
        }
    });

    /**/

});