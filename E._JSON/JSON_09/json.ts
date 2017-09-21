function GenerarTabla() {

    var xhttp : XMLHttpRequest = new XMLHttpRequest();
  
    xhttp.open("GET" , "./traerAuto.php");
    xhttp.send();

    xhttp.onreadystatechange = () => {

        if(xhttp.readyState==4 && xhttp.status==200) {

           var json = JSON.parse(xhttp.responseText);

            for(let item of json) {

                var tr : HTMLElement = document.createElement("tr");
                var tdId : HTMLElement = document.createElement("td");
                var tdMarca : HTMLElement = document.createElement("td");
                var tdPrecio : HTMLElement = document.createElement("td");
                var tdColor : HTMLElement = document.createElement("td");
                var tdModelo : HTMLElement = document.createElement("td");

                tdId.appendChild(document.createTextNode(item.Id));
                tdMarca.appendChild(document.createTextNode(item.Marca));
                tdPrecio.appendChild(document.createTextNode(item.Precio));
                tdColor.appendChild(document.createTextNode(item.Color));
                tdModelo.appendChild(document.createTextNode(item.Modelo));

                tr.appendChild(tdId);
                tr.appendChild(tdMarca);
                tr.appendChild(tdPrecio);
                tr.appendChild(tdColor);
                tr.appendChild(tdModelo);

                (<HTMLTableElement>document.getElementById("table")).appendChild(tr);

            }
        }
    }
}