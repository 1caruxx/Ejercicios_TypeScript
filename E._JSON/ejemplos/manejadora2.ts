/// <reference path="./ajax.ts" />

namespace Test {

    export function EnviarJSON():void {

        //CREO UN OBJETO JSON
        let persona = { "nombre" : "Juan", "edad" : 35 };
        let pagina = "../BACKEND/json_test_enviar.php";
        
        let ajax : Ajax = new Ajax();
        let params : string = "miPersona=" + JSON.stringify(persona);

        ajax.Post(pagina, 
            (resultado:string)=> {

                (<HTMLDivElement>document.getElementById("divResultado")).innerHTML = resultado; 
                
                console.clear();

                console.log(resultado);
            }
            , params, Fail);

        }

    export function RecibirJSON():void {

        let pagina = "../BACKEND/json_test_recibir.php";
        
        let ajax : Ajax = new Ajax();

        ajax.Post(pagina, 
            (resultado:string)=> {

                (<HTMLDivElement>document.getElementById("divResultado")).innerHTML = "";

                console.clear();

                console.log(resultado);
                
                let objJson = JSON.parse(resultado);
                console.log(objJson.nombre);
            }
            , "", Fail);
    }

    function Fail(retorno:string):void {
        console.clear();
        console.log("ERROR!!!");
        console.log(retorno);
    }
    
}