function Funcion() : void{

    for(var i:number=0; i<5 ; i++){
         
        //getElementById("") es un metodo que devuelve una referencia al elementos cuya id se le pase como parametro.
        //con esta referencia se puede extraer el valor de ese elemento con la propiedad value o saber si algo fue tildado con checked.
        if((<HTMLInputElement>document.getElementById(`chkOp${i+1}`)).checked){

            console.log((<HTMLInputElement>document.getElementById(`chkOp${i+1}`)).value);
        }
    }
}