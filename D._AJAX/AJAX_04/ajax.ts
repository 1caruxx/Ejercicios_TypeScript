function Calcular() {

    var numero1 : string = (<HTMLInputElement>document.getElementById("txtNumero1")).value;
    var numero2 : string = (<HTMLInputElement>document.getElementById("txtNumero2")).value;
    var operador : string = (<HTMLSelectElement>document.getElementById("slcOperadores")).value;
    var xhttp : XMLHttpRequest = new XMLHttpRequest();
    var esNumero : boolean = true;

    if(!ValidarNumero(numero1) || !ValidarNumero(numero2)) {

        alert("Uno de los operadores no es valido");
    }
    else {

        xhttp.open("GET" , "./admin.php?numero1=" + numero1 + "&numero2=" + numero2 + "&operador=" + operador);
        xhttp.send();
        
        xhttp.onreadystatechange = () => {

            if(xhttp.readyState == 4 && xhttp.status == 200) {

                if(xhttp.responseText == "false") {

                    alert("No se ha podido realizar la operacion.");
                }
                else {
                
                    (<HTMLSpanElement>document.getElementById("span")).innerHTML = "Resultado: " + xhttp.responseText + "&nbsp;";
                }
            }
        }
    }
}

function ValidarNumero(numero:string):boolean {

    var retorno : boolean = true;

    for(let i:number=0 ; i<numero.length ; i++) {
        
        if(isNaN(parseInt(numero.charAt(i)))) {
        
            retorno = false;
            break;
        }
    }

    return retorno;
}