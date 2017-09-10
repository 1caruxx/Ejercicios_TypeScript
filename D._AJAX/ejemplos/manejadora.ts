namespace Test{

    //CREO UNA INSTANCIA DE XMLHTTPREQUEST
    let xhttp : XMLHttpRequest = new XMLHttpRequest();

    export function Ajax():void {

        //METODO; URL; ASINCRONICO?
        xhttp.open("GET", "BACKEND/ajax_test.php", true);

        //ENVIO DE LA PETICION
        xhttp.send();

        //FUNCION CALLBACK
        xhttp.onreadystatechange = () => {
            
            console.log(xhttp.readyState);
            
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                alert(xhttp.responseText);
            }
        };

    }

    //ENVIO PETICION CON PARAMETROS POR METODO GET
    export function AjaxGET(): void{

        //METODO; URL + PARAMETROS; ASINCRONICO?
        xhttp.open("GET", "BACKEND/ajax_test.php?valor="+Math.random()*100, true);

        //ENVIO DE LA PETICION
        xhttp.send();

        //FUNCION CALLBACK
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                alert(xhttp.responseText);
            }
        };	
    }
    //ENVIO PETICION CON PARAMETROS POR METODO POST
    export function AjaxPOST():void {
        
        //METODO; URL; ASINCRONICO?
        xhttp.open("POST", "BACKEND/ajax_test.php", true);

        //SETEO EL ENCABEZADO DE LA PETICION	
        xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        
        //ENVIO DE LA PETICION CON LOS PARAMETROS
        xhttp.send("valor="+Math.random()*100);

        //FUNCION CALLBACK
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                alert(xhttp.responseText);
            }
        };
    }

    export function ActualizarGET():void {
        
        //METODO; URL + PARAMETROS; ASINCRONICO?
        xhttp.open("GET", "BACKEND/ajax_test.php?valor="+Math.random()*100, true);

        //ENVIO DE LA PETICION
        xhttp.send();

        //FUNCION CALLBACK
        xhttp.onreadystatechange = () => {
            AdministrarRespuesta();
        }
    }

    export function ActualizarPOST():void {

        //METODO; URL; ASINCRONICO?
        xhttp.open("POST", "BACKEND/ajax_test.php", true);
        
        //SETEO EL ENCABEZADO DE LA PETICION	
        xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        
        //ENVIO DE LA PETICION CON LOS PARAMETROS
        xhttp.send("valor="+Math.random()*100);

        //FUNCION CALLBACK
        xhttp.onreadystatechange = () => {
            AdministrarRespuesta();
        };
    }

    function AdministrarRespuesta():void {

        if (xhttp.readyState == 4 && xhttp.status == 200) {
            //LA RESPUESTA SE GUARDA EN UN ELEMENTO HTML
            (<HTMLDivElement>document.getElementById("divResultado")).innerHTML = xhttp.responseText;
        }

    }
/*******************************************************************************************************/    
/*******************************************************************************************************/
    export function ProcesoLargo():void {

        let pagina : string = "BACKEND/proceso_largo.php";
        let div = <HTMLDivElement> document.getElementById("divResultado");

        //LIMPIO EL CONTENIDO DEL DIV    
        div.innerHTML = '';

        //MUESTRO EL GIF EN EL CENTRO DE LA PAGINA
        AdministrarGif(true, 1);

        //METODO; URL; ASINCRONICO?
        xhttp.open("POST", pagina, true);
        
        //SETEO EL ENCABEZADO DE LA PETICION	
        xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        
        //ENVIO DE LA PETICION
        xhttp.send(null);

        //FUNCION CALLBACK
        xhttp.onreadystatechange = () => {
            var DONE = 4; // readyState 4 means the request is done.
            var OK = 200; // status 200 is a successful return.
           if (xhttp.readyState === DONE) {
                if (xhttp.status === OK) {
                    //MUESTRO EL RESULTADO DE LA PETICION
                    div.innerHTML = xhttp.responseText;
                    //OCULTO EL GIF
                    AdministrarGif(false);
                }
                else{
                    alert("Error\n"+xhttp.status);
                    //OCULTO EL GIF
                    AdministrarGif(false);                
                }
            }
        }; 

    }

    function AdministrarGif(mostrar:boolean, cual:number = 1):void {

        var gif : string = cual === 1 ? "AJAX/gif-load.gif" : "AJAX/200.webp";
        let div = <HTMLDivElement> document.getElementById("divGif");
        let img = <HTMLImageElement> document.getElementById("imgGif");

        if(mostrar){
            div.style.display = "block";
            div.style.top = "50%";
            div.style.left = "45%"
            img.src = gif;
        }

        if(!mostrar){
            div.style.display = "none";
            img.src = "";
        }
    }

    export function IrHacia(pagina:string):void {
        window.location.href = pagina;
    }
}