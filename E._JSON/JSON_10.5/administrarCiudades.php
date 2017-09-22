<?php

    if(@!$archivo = fopen("./city.list.min.json" , "r")) {

        echo "No se pudo abrir el archivo.";
    }
    else {

        $JSON = array();

        while(!feof($archivo)) {

            array_push($JSON , json_decode(trim(fgets($archivo))));
        }
        
        echo json_encode(array_filter($JSON));

        fclose($archivo);
    }
?>