function Calcular() : void{

    var numero1 : number = parseInt((<HTMLInputElement>document.getElementById("nmbNumeroUno")).value);
    var numero2 : number = parseInt((<HTMLInputElement>document.getElementById("nmbNumeroDos")).value);
    var resultado : number = 0;
    var signo : string = "";

    for(var i:number=0 ; i<document.getElementsByName("rdoOpcion").length ; i++){

        if((<HTMLInputElement>document.getElementsByName("rdoOpcion")[i]).checked){

            signo = (<HTMLInputElement>document.getElementsByName("rdoOpcion")[i]).value;
        }
    }

    switch(signo){
        case '+':
            resultado = numero1 + numero2;
            break;

        case '-':
            resultado = numero1 - numero2;
            break;

        case '*':
            resultado = numero1 * numero2;
            break;

        case '/':

            if(numero2 == 0){

                alert("No se puede dividir por 0.");
            }
            else{

                resultado = numero1 / numero2;
            }

            break;
    }

    console.log(`El resultado de la operacion es: ${resultado}`);
    (<HTMLInputElement>document.getElementById("nmbResultado")).value = resultado.toString();
}