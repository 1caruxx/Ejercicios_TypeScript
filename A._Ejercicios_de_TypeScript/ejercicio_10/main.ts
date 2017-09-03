function MostrarInformacion(cadena:string) : void{

    if(cadena === cadena.toUpperCase()){

        console.log("La cadena esta enteramente formada por mayusculas.");
    }
    else{

        if(cadena === cadena.toLowerCase()){

            console.log("La cadena esta enteramente formada por minusculas.");
        }
        else{

            console.log("La cadena esta formada por minusculas y mayusculas.");
        }
    }
}

MostrarInformacion("HOLA");
MostrarInformacion("hola");
MostrarInformacion("HolA");