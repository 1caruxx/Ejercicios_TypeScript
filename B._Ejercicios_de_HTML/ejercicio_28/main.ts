function CrearTabla(filas:number , columnas:number) : void {
    
    var tabla : HTMLElement = document.createElement("table");
    var tbody : HTMLElement = document.createElement("tbody");
    var br : HTMLElement = document.createElement("br");
    var nodoFilas : Array<HTMLElement> = new Array<HTMLElement>();

    for(var i:number=0 ; i<filas ; i++){

        nodoFilas[i] = document.createElement("tr");

        for(var j:number=0 ; j<columnas ; j++){

            nodoFilas[i].appendChild(document.createElement("td"))
        }

        tbody.appendChild(nodoFilas[i]);
    }
    
    tabla.setAttribute("border" , "1");
    tabla.appendChild(tbody);
    (<HTMLInputElement>document.getElementById("div")).appendChild(br);
    (<HTMLInputElement>document.getElementById("div")).appendChild(tabla);
}