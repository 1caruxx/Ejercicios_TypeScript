<?php

    if(@!$archivo = fopen("./city.list.min.json" , "r")) {

        echo "No se pudo abrir el archivo.";
    }
    else {

        $JSONstring = "[";

        while(!feof($archivo)) {

            $JSONstring .= trim(fgets($archivo));
            $JSONstring .= ",";
        }
        
        $JSONstring = substr ($JSONstring, 0, strlen($JSONstring) - 2);
        $JSONstring .= "]";

        echo $JSONstring;

        fclose($archivo);
    }
?>