function EsPalindromo(cadena:string) : boolean{

    var array : Array<string> = cadena.split(" ");
    var cadenaAux : string = "";
    var contador : number = 0;
    var retorno : boolean = false;

    
    for(let item of array){

        cadenaAux = cadenaAux.concat(item);
    }
    
    cadenaAux = cadenaAux.toLowerCase();

    for(let i:number=0 ; i<cadenaAux.length ; i++){

        if(cadenaAux.charAt(i) == cadenaAux.charAt(cadenaAux.length-i-1)){

            contador++;
        }
        else{

            break;
        }
    }

    if(contador == cadenaAux.length){

        retorno = true;
    }

    return retorno;
}

if(EsPalindromo("La ruta nos aporto otro paso natural")){

    console.log("La frase es palindroma");
}
else{

    console.log("La frase no es palindroma");
}

if(EsPalindromo("hola")){
    
        console.log("La frase es palindroma");
}
else{

    console.log("La frase no es palindroma");
 }