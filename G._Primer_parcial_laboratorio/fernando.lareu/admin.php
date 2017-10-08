<?php

    switch($_GET["accion"]) {

        case 'agregar':

            if(!@ $archivo = fopen("./BACKEND/ciudadanos.json" , "a")) {

                echo "No se pudo abrir el archivo.";
            }
            else {

                $ruta = "./BACKEND/fotos/".date("Gis");

                $json = json_decode($_GET["json"]);
                $json->foto = $ruta;
                $jsonCadena = json_encode($json);

                fwrite($archivo , $jsonCadena."\r\n");
                move_uploaded_file($_FILES["foto"]["tmp_name"] , $ruta);
            }
            break;

        case 'listar':

            echo json_encode(ObtenerElementos());
            break;
        case 'eliminar':
            $JSON = ObtenerElementos();
            $i=0;
            
            if(!@$archivo = fopen("./BACKEND/ciudadanos.json" , "w")) {

                echo "No se pudo abrir el archivo.";
            }
            else {
                foreach($JSON as $item) {
                    
                    if(/*($item->datosCiviles)->dni*/$item->datosCiviles->dni == $_REQUEST["dni"]) {
                        
                        unset($JSON[$i]);
                        unlink(($item->datosCiviles)->foto);
                    }

                    if(isset($JSON[$i])){

                        fwrite($archivo , trim(json_encode($JSON[$i]))."\r\n");
                    }

                    $i++;
                }
                
                break;

        case 'modificar':

            $JSON = ObtenerElementos();
            $JSONModificado = $_GET["json"];
            $ruta = "./BACKEND/fotos/".date("Gis");
            $encontrado = false;

            $i=0;
            
            if(!@$archivo = fopen("./BACKEND/ciudadanos.json" , "w")) {

                echo "No se pudo abrir el archivo.";
            }
            else {

                foreach($JSON as $item) {
                    
                    if(/*($item->datosCiviles)->dni*/$item->datosCiviles->dni == $_REQUEST["dni"]) {
                        
                        ($JSON[$i]->datosPersonales)->nombre = ($JSONModificado->datosPersonales)->nombre;
                        ($JSON[$i]->datosPersonales)->apellido = ($JSONModificado->datosPersonales)->apellido;
                        ($JSON[$i]->datosPersonales)->edad = intval(($JSONModificado->datosPersonales)->edad);
                        ($JSON[$i]->datosCiviles)->dni = intval(($JSONModificado->datosCiviles)->dni);
                        ($JSON[$i]->datosCiviles)->pais = ($JSONModificado->datosCiviles)->pais;
                        ($JSON[$i]->datosCiviles)->foto = $ruta;
                        $encontrado = true;
                    }

                    if(isset($JSON[$i])){

                        fwrite($archivo , trim(json_encode($JSON[$i]))."\r\n");
                    }

                    $i++;
                }

                if($encontrado) {

                    move_uploaded_file($_FILES["foto"]["tmp_name"] , $ruta);
                }
                
            break;
    }

    function ObtenerElementos() {

        if(@!$archivo = fopen("./BACKEND/ciudadanos.json" , "r")) {
            
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
?>