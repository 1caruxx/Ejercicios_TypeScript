<?php

    if(@!$archivo = fopen("./auto.json" , "r")) {

        echo "No se pudo abrir el archivo.";
    }
    else {

        echo fgets($archivo);

        fclose($archivo);
    }
?>