function Mostrar() {

    var xhttp : XMLHttpRequest = new XMLHttpRequest();
    var contador : number = 0;

    xhttp.open("GET" , "./traerAuto.php");
    xhttp.send();
JSON.
    xhttp.onreadystatechange = () => {

        if(xhttp.readyState==4 && xhttp.status==200) {

            (<HTMLInputElement>document.getElementById("txtAtributo"+contador)).value = xhttp.responseText;
            contador++;
        }
    }
}