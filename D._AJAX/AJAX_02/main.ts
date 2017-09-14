function Enviar() {

    var xhttp = new XMLHttpRequest();
    var ruta: string = (<HTMLInputElement>document.getElementById("txtRuta")).value;
    
    xhttp.open("GET" , "./admin.php/?ruta=" + ruta);
    xhttp.send();

    xhttp.onreadystatechange = () => {

        if(xhttp.readyState==4 && xhttp.status==200) {

            if(xhttp.responseText == "false") {

                alert("No se pudo abrir el archivo.");
            }
            else {

                (<HTMLDivElement>document.getElementById("div")).innerHTML= xhttp.responseText;
            }
        }
    }
}