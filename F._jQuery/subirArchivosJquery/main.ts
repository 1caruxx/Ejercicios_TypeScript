/// <reference path="./libs/jquery/index.d.ts" />

function SubirFoto(){
        
        let pagina : string = "./BACKEND/subirImagen.php";
        
        if($("#archivo").val() === "")
        {
            return;
        }

        $("#fotoTmp").attr("src", "");
        $("#lblFoto").html("");
        
        AdministrarGif(true);

        let archivo : any = (<HTMLInputElement>document.getElementById("archivo"));
        let formData : FormData = new FormData();
        formData.append("archivo",archivo.files[0]);
        formData.append("caso", "1");
 
        $.ajax({
            type: 'POST',
            url: pagina,
            dataType: "json",
            cache: false,
            contentType: false,
            processData: false,
            data: formData,
            async: true
        })
        .done(function (objJson) {

            AdministrarGif(false);

            if(!objJson.Exito){
                console.clear();
                console.log(objJson.Mensaje);
                return;
            }
            $("#fotoTmp").attr("src", objJson.PathTemporal);
            $("#hdnFotoSubir").val(objJson.PathTemporal);
            $("#lblFoto").html("Nombre de la imagen: "+objJson.NombreFoto);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            AdministrarGif(false);
            alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
        }); 
 
}

function AdministrarGif(mostrar:boolean):void {

    let gif : string = "css/gif-load.gif";
    let div = $("#divGif");//<HTMLDivElement> document.getElementById("divGif");
    let img = $("#imgGif");//<HTMLImageElement> document.getElementById("imgGif");

    if(mostrar){
        div.css("display", "block");//div.style.display = "block";
        div.css("top", "50%");//div.style.top = "50%";
        div.css("left", "45%");//div.style.left = "45%"
        img.attr("src", gif); //img.src = gif;
    }
    else{
        div.css("display", "block");//div.style.display = "none";
        img.attr("src", "");//img.src = "";
    }
}
