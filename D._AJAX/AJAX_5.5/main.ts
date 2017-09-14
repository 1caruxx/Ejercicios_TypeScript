function Enviar():void {

    var usuario : string = ((<HTMLInputElement>document.getElementById("txtUsuario")).value).toLowerCase();
    var xhttp : XMLHttpRequest = new XMLHttpRequest();

    xhttp.open("GET" , "./comprobarDisponibilidad.php?usuario=" + usuario);
    xhttp.send();

    xhttp.onreadystatechange = () => {

        if(xhttp.status==200 && xhttp.readyState==4) {

            alert(xhttp.responseText);
        }
    }
}