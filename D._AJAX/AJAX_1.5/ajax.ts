function CalcularImpares() {
    
    var numero : string = (<HTMLInputElement>document.getElementById("txtNumero")).value;
    var xhttp : XMLHttpRequest = new XMLHttpRequest();
    var esNumero : boolean = true;

    for(let i:number=0 ; i<numero.length ; i++) {

        if(isNaN(parseInt(numero.charAt(i)))) {

            esNumero = false;
            break;
        }
    }

    if(esNumero) {

        xhttp.open("POST" , "./admin.php");
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("txtValor="+numero);

        xhttp.onreadystatechange = () => {

            if(xhttp.status == 200 && xhttp.readyState == 4) {

                (<HTMLInputElement>document.getElementById("txtImpares")).value = xhttp.responseText;
            }
        };
    }
    else {

        alert("Valor ingresado no valido");
    }
}