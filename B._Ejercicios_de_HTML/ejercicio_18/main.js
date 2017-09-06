"use strict";
function Funcion() {
    //document.getElementsByName("") es un metodo que retorna una coleccion de elementos segun el nombre que se le pase comoo parametro.
    //en este caso, retornara los radio buttons por que en el atributo name le asigne el nombre que le paso como parametro.
    //Recorro esa coleccion y pregunto si elemento esta seleccionado usando la propiedad checked que retorna un booleano en funcion de si fue tildado o no el radio button.
    //Los radio buttons no funciona con el atributo id por mas que la variable tenga el mismo nombre, pueden tildarse multiples y no destildarse.
    for (var i = 0; i < (document.getElementsByName("rdoOpcion")).length; i++) {
        if (document.getElementsByName("rdoOpcion")[i].checked) {
            console.log("Su nombre es: " + document.getElementById("txtNombre").value + "\nUsted piensa que mi pagina es: " + document.getElementsByName("rdoOpcion")[i].value);
        }
    }
}
//# sourceMappingURL=main.js.map