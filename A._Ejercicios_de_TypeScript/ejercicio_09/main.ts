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

function CalcularCubo(numero:number) : number{
        
        return Math.pow(numero , 3);
}

function Funcion(numero:number) : void{

    if(numero>0){

        console.log(CalcularFactorial(numero));
    }
    else{

        if(numero<0){

            console.log(CalcularCubo(numero));
        }
        else{

            console.log("El 0 no esta permitido.");
        }
    }
}

Funcion(4);
Funcion(-3);
Funcion(0);