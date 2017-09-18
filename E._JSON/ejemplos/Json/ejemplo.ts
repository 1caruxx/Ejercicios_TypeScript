/// <reference path="../ajax.ts" />



function ObtenerEquiposPorIdPais(idPais:number):void {

    if (idPais == 0) {
        return;
    }

    let pagina : string = "../BACKEND/paises_equipos.php";
    let params : string = "idPais="+idPais.toString(); 
    let ajax : Ajax = new Ajax();

    (<HTMLSelectElement>document.getElementById("cboEquipo")).innerHTML = "";

    ajax.Post(pagina, 
        (resultado:any)=> {

            let equiposArray : any[] = JSON.parse(resultado);

            for(let i=0; i<equiposArray.length; i++){
                let elemento : any = {};

                elemento.value = equiposArray[i].id;
                elemento.innerHTML = equiposArray[i].nombre;
                let opcion : string = "<option value='"+elemento.value+"'>"+elemento.innerHTML+"</option>";

                (<HTMLSelectElement>document.getElementById("cboEquipo")).innerHTML += opcion;

            }
            
        }
        , params, Fail);
    


}



function Fail(retorno:string):void {
    console.clear();
    console.log("ERROR!!!");
    console.log(retorno);
}