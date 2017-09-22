function GenerarTabla() {

    var xhttp : XMLHttpRequest = new XMLHttpRequest();
    var stringAuxiliar : string = "<tbody><thead><th>ID</th><th>Marca</th><th>Precio</th><th>Color</th><th>Modelo</th></thead></tbody>";
  
    xhttp.open("GET" , "./traerAuto.php");
    xhttp.send();

    xhttp.onreadystatechange = () => {

        if(xhttp.readyState==4 && xhttp.status==200) {

           var json = JSON.parse(xhttp.responseText);

            for(let item of json) {

                stringAuxiliar += `<tr><td>${item.Id}</td><td>${item.Marca}</td><td>${item.Precio}</td><td>${item.Color}</td><td>${item.Modelo}</td></tr>`;
            }

            (<HTMLTableElement>document.getElementById("table")).innerHTML = stringAuxiliar;
        }
    }
}