<?php

    switch($_REQUEST["accion"]) {

        case 'listar':

            echo json_encode(array_filter(ObtenerElementos()));
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
                break;

            case 'eliminar':

                $JSON = ObtenerElementos();
                $i=0;
                if(!@$archivo = fopen("./city.list.min.json" , "w")) {

                     foreach($JSON as $item) {

                         if($item->_id == $_REQUEST["id"]) {

                             unset($JSON[$i]);
                        }
                        fwrite($archivo , $JSON[$i]);
                        $i++;
                    }

                }
                
    }

    function ObtenerElementos() {

        if(@!$archivo = fopen("./city.list.min.json" , "r")) {
            
            echo "No se pudo abrir el archivo.";
        }
        else {

            $JSON = array();
                            
            while(!feof($archivo)) {
            
                array_push($JSON , json_decode(trim(fgets($archivo))));
            }

            fclose($archivo);

            return $JSON;
        }
    }
?>