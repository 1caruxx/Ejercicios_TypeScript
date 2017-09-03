function CalcularFactorial(numero:number) : number{

    var retorno : number = 0;

    if(numero == 0){

        retorno = 1;
    }
    else{
        
        retorno = numero;
        for(let i:number=numero-1 ; i>0 ; i--){

            retorno *= i;
        }
    }

    return retorno;
}

console.log(CalcularFactorial(5));