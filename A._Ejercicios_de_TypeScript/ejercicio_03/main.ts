function Funcion(numero:number , cadena?:string) : void{

    if(cadena){

        for(var i:number=0 ; i<numero ; i++){

            console.log(cadena);
        }
    }
    else{

        console.log(1/numero);
    }
}

Funcion(3 , "Hola mundo!");
Funcion(3);