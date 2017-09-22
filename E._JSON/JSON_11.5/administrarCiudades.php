<?php

    switch($_REQUEST["accion"]) {

        case 'listar':
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
            break;
            case 'agregar':
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
    }
?>