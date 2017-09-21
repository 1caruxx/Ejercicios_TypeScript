<?php

    if(isset($_REQUEST["json"])) {

        if(@!$archivo = fopen("./city.list.min.json" , "a")) {
            
              echo "No se pudo abrir el archivo.";
        }
        else {

            echo $_REQUEST["json"];
            fwrite($archivo , $_REQUEST["json"]."\r\n");
            fclose($archivo);
        }
    }
    else {

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
    }
?>