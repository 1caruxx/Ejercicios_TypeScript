<?php

    $ruta = $_REQUEST["ruta"];

    if(@!$archivo = fopen($ruta , "r")) {

        echo "false";
    }
    else {

        echo fread($archivo , filesize($ruta));
        fclose($archivo);
    }
?>