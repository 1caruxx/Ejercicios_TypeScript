function Validar() : void{

    var sexo : string = ((<HTMLInputElement>document.getElementById("txtSexo")).value).toLowerCase();
    //var mensaje : string = "Todo esta en orden";
    var dni : string = "";
    var valido : number = 1;

    if(!((<HTMLInputElement>document.getElementById("txtNombre")).value)){

        (<HTMLInputElement>document.getElementById("txtNombre")).value = "Nombre invalido";
        (<HTMLInputElement>document.getElementById("txtNombre")).style.color = "#ff0000";
        valido = 0;
    }
 
    if(!((<HTMLInputElement>document.getElementById("txtApellido")).value)){
        
        (<HTMLInputElement>document.getElementById("txtApellido")).value = "Apellido invalido";
        (<HTMLInputElement>document.getElementById("txtApellido")).style.color = "#ff0000";
        valido = 0;
    }


    if(!((<HTMLInputElement>document.getElementById("txtDni")).value)){

            (<HTMLInputElement>document.getElementById("txtDni")).value = "DNI invalido";
            (<HTMLInputElement>document.getElementById("txtDni")).style.color = "#ff0000";
            valido = 0;
    }
    else{

        dni = (<HTMLInputElement>document.getElementById("txtDni")).value;

        for(var i:number=0 ; i<dni.length ; i++){
            
            if(isNaN(parseInt(dni.charAt(i)))){

                    (<HTMLInputElement>document.getElementById("txtDni")).value = "DNI invalido";
                    (<HTMLInputElement>document.getElementById("txtDni")).style.color = "#ff0000";
                    valido = 0;
                    break;
            }
        }
    }

    if(sexo!="m" && sexo!="f"){
            
        (<HTMLInputElement>document.getElementById("txtSexo")).value = "Sexo invalido";
        (<HTMLInputElement>document.getElementById("txtSexo")).style.color = "#ff0000";
        valido = 0;
    }

    if(valido){

        console.log("Todo esta en orden");
    }
    else{

        console.log("Algun campo es incorrecto");
    }
}