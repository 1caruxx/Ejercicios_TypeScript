function Mostrar() {

    var xhttp : XMLHttpRequest = new XMLHttpRequest();
    
    xhttp.open("GET" , "./traerAuto.php");
    xhttp.send();

    xhttp.onreadystatechange = () => {

        if(xhttp.readyState==4 && xhttp.status==200) {

           var json = JSON.parse(xhttp.responseText);

           (<HTMLInputElement>document.getElementById("id")).value = json.Id;
           (<HTMLInputElement>document.getElementById("marca")).value = json.Marca;
           (<HTMLInputElement>document.getElementById("precio")).value = json.Precio;
           (<HTMLInputElement>document.getElementById("color")).value = json.Color;
           (<HTMLInputElement>document.getElementById("modelo")).value = json.Modelo;
        }
    }
}