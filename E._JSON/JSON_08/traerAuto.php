<?php

    if(@!$archivo = fopen("./auto.json" , "r")) {

        echo "No se pudo abrir el archivo.";
    }
    else {

        $objeto =

        echo  json_decode(fgets($archivo));

        fclose($archivo);
    }
?>