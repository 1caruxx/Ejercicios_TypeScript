function GenerarTabla() {

    var xhttp : XMLHttpRequest = new XMLHttpRequest();
  
    xhttp.open("GET" , "./administrarCiudades.php");
    xhttp.send();

    xhttp.onreadystatechange = () => {

        if(xhttp.readyState==4 && xhttp.status==200) {

            var json = JSON.parse(xhttp.responseText);

            for(let item of json) {

                var tr : HTMLElement = document.createElement("tr");
                var tdId : HTMLElement = document.createElement("td");
                var tdName : HTMLElement = document.createElement("td");
                var tdCountry : HTMLElement = document.createElement("td");
                var tdLongitud : HTMLElement = document.createElement("td");
                var tdLatitud : HTMLElement = document.createElement("td");
    
                tdId.appendChild(document.createTextNode(item._id));
                tdName.appendChild(document.createTextNode(item.name));
                tdCountry.appendChild(document.createTextNode(item.country));
                tdLongitud.appendChild(document.createTextNode((item.coord).lon));
                tdLatitud.appendChild(document.createTextNode((item.coord).lat));;
    
                tr.appendChild(tdId);
                tr.appendChild(tdName);
                tr.appendChild(tdCountry);
                tr.appendChild(tdLongitud);
                tr.appendChild(tdLatitud);

                (<HTMLTableElement>document.getElementById("table")).appendChild(tr);
            }
        }
    }
}

function Agregar() {

    var ID : string = (<HTMLInputElement>document.getElementById("txtId")).value;
    var name : string = (<HTMLInputElement>document.getElementById("txtNombre")).value;
    var country : string = (<HTMLInputElement>document.getElementById("txtCountry")).value;
    var lon : string = (<HTMLInputElement>document.getElementById("txtLongitud")).value;
    var lat : string = (<HTMLInputElement>document.getElementById("txtLatitud")).value;
    var json = {"_id":ID,"name":name,"country":country,"coord":{"lon":lon,"lat":lat}};

    var xhttp : XMLHttpRequest = new XMLHttpRequest();
    
    //alert(JSON.stringify(json));
    xhttp.open("GET" , "./administrarCiudades.php?json=" + JSON.stringify(json));
    xhttp.send();
  
    xhttp.onreadystatechange = () => {

        if(xhttp.readyState==4 && xhttp.status==200) {
            
            alert(xhttp.responseText);
        }
    }
}
