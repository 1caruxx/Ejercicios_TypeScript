<?php

    sleep(rand(0 , 6));

    if(@!$archivo = fopen("./Archivos/nombres_ocupados.txt" , "r")) {

        echo "Algo salio mal jaja salu2.";
    }
    else {

        while(!feof($archivo)) {
 
            if($_REQUEST["usuario"] == trim(fgets($archivo))) {

                echo "El nombre ya esta ocupado.";
                fclose($archivo);
                die();
            }
        }

        echo "Nombre de usuario disponible.";
        fclose($archivo);
    }
?>