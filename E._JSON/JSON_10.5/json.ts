function GenerarTabla() {

    var xhttp : XMLHttpRequest = new XMLHttpRequest();
    var stringAuxiliar : string = "<tbody><thead><th>ID</th><th>Marca</th><th>Precio</th><th>Color</th><th>Modelo</th></thead></tbody>";
  
    xhttp.open("GET" , "./administrarCiudades.php");
    xhttp.send();

    xhttp.onreadystatechange = () => {

        if(xhttp.readyState==4 && xhttp.status==200) {

            var json = JSON.parse(xhttp.responseText);

            for(let item of json) {

                stringAuxiliar += `<tr><td>${item._id}</td><td>${item.name}</td><td>${item.country}</td><td>${(item.coord).lon}</td><td>${(item.coord).lat}</td></tr>`;
            }

            (<HTMLTableElement>document.getElementById("table")).innerHTML = stringAuxiliar;
        }
    }
}