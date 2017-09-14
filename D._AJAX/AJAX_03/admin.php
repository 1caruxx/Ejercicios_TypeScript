<?php

    $ruta = $_REQUEST["ruta"];
    $palabra = $_REQUEST["palabra"];
    $string = "";
    $arrayString = array();
    $seEncontro = false;

    if(@!$archivo = fopen($ruta , "r")) {

        echo "false";
    }
    else {

        while(!feof($archivo)) {

            $string .= " ".fgets($archivo);
        }

        $arrayString = explode(" " , $string);
        unset($arrayString[0]);

        foreach($arrayString as $item) {

            if($item == $palabra) {

                echo "El archivo contiene la palabra: ".$item;
                die();
            }
        }

        if(!$seEncontro) {

            echo "No se encontro la palabra.";
        }

        fclose($archivo);
    }
?>