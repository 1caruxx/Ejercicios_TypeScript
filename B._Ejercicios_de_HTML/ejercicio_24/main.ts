function Validar() : void{

    var sexo : string = ((<HTMLInputElement>document.getElementById("txtSexo")).value).toLowerCase();
    var mensaje : string = "Todo esta en orden";
    var dni : string = "";
    var flag : number = 0;

    /*
     * Si el campo de nombre o apellido en la pagina no es seteado, el metod .getElementById() devolvera null, entonces lo niego para que entre en el if
     * Esta linea de codigo tambien es valida: ((<HTMLInputElement>document.getElementById("txtNombre")).value).length == 0
     */ 
    if(!((<HTMLInputElement>document.getElementById("txtNombre")).value)){

        mensaje = "Nombre no valido\n";
        flag = 1;
    }
 
    if(!((<HTMLInputElement>document.getElementById("txtApellido")).value)){
        
         if(flag){
        
            mensaje += "Apellido no valido\n";
         }
        else{
        
            mensaje = "Apellido no valido\n";
            flag = 1;
        }
    }

    /*
     * Si es null quiere decir que el campo no se lleno.
     * Como no puedo asignar null a una variable directamente primero lo pregunto.
     */ 
    if(!((<HTMLInputElement>document.getElementById("txtDni")).value)){

        if(flag){
            
                mensaje += "Dni no valido\n";
             }
            else{
            
                mensaje = "Dni no valido\n";
                flag = 1;
            }
    }
    else{

        //Si no es null la asigno
        dni = (<HTMLInputElement>document.getElementById("txtDni")).value;

        for(var i:number=0 ; i<dni.length ; i++){
            
           /*
            * La funcion parseInt retorna NaN (Not a Number) si el primer caracter de una cadena no lo puede castear, asi que evaluo caracater a caracter individualemnte.
            * Recorro el string preguntando si algun caracter no es un numero.
            * En el caso de que no haya un caraceter valido como numero, devolvera NaN y la funcion isNaN retornara un booleano en funcion a ello.
            */ 

            if(isNaN(parseInt(dni.charAt(i)))){

                if(flag){
                    
                        mensaje += "Dni no valido\n";
                        break;
                     }
                    else{
                    
                        mensaje = "Dni no valido\n";
                        flag = 1;
                        break;
                    }
            }
        }
    }

    if(sexo!="m" && sexo!="f"){
            
        if(flag){
                                
            mensaje += "Sexo no valido\n";
        }
        else{
                                    
             mensaje = "Sexo no valido\n";
        }
    }

    console.log(mensaje);
}