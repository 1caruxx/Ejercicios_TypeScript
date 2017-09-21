<?php

    if(@!$archivo = fopen("./autos.json" , "r")) {

        echo "No se pudo abrir el archivo.";
    }
    else {

        $JSONstring = "";

        while(!feof($archivo)) {

            $JSONstring .= trim(fgets($archivo));
        }

        echo $JSONstring;
        
        fclose($archivo);
    }
?>