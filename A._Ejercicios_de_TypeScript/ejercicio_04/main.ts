function Funcion(numero:number) : void{

    if(numero == 0){

        console.log(`El numero 0.`);
    }
    else{

        if(numero%2 == 0){

            console.log(`El numero ${numero} es par.`);
        }
        else{

            console.log(`El numero ${numero} es impar.`);
        }
    }
}

Funcion(3);
Funcion(8);
Funcion(0);