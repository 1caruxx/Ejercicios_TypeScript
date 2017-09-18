<?php

    if(@!$archivo = fopen("./auto.json" , "r")) {

        echo "No se pudo abrir el archivo.";
    }
    else {

        $objeto = json_decode(fgets($archivo));
        echo "ID: ".$objeto->Id.
             "\nMarca: ".$objeto->Marca.
             "\nPrecio: ".$objeto->Precio.
             "\nColor: ".$objeto->Color.
             "\nModelo: ".$objeto->Modelo;

        fclose($archivo);
    }
?>