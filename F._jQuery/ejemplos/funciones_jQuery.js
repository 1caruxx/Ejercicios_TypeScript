function ModificarPs() {
    //A TODOS LOS ELEMENTOS LE CAMBIO EL COLOR DE LETRA
    $("P").css("color", "black");
}

function ModificarPorId() {
    //A UN DETERMINADO ELEMENTO LE CAMBIO EL CONTENIDO
    var contenidoAnterior = $("#idP").html();
    alert(contenidoAnterior);
    //A UN DETERMINADO ELEMENTO LE CAMBIO EL CONTENIDO
    $("#idP").html("Establezco un nuevo contenido en el elemento HTML.");
    console.log("para acceder (por id) a un elemento HTML");
    console.log("se coloca como selector el valor de su atributo ID");
    console.log("anteponiendole el simbolo '#'.");
}

function MostrarDatos() {
    //OBTENGO LOS DISTINTOS VALORES POR ID DE ELEMENTO
    var nombre = $("#txtNombre").val();
    var opcion = $("#cboSeleccion").val();
    alert("Nombre: " + nombre + "\nOpcion: " + opcion);
    //COLOCO LOS VALORES RECUPERADOS EN UN DIV
    $("#idDiv").html("Nombre: " + nombre + "<br>Opcion: " + opcion);
}

function CambiarDatos() {
    //ESTABLEZCO NUEVOS VALORES
    alert("Cambia de valor la seleccion ('op2')\ny del nombre ('ROBERTO')");
    $("#txtNombre").val("ROBERTO");
    $("#cboSeleccion").val("op2");
}
