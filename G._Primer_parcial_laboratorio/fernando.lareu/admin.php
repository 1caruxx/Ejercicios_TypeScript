<?php

    switch($_POST["accion"]) {

        case 'agregar':

            agregar();
            break;

        case 'listar':

            echo json_encode(array_filter(ObtenerElementos()));
            break;

        case 'eliminar':
            eliminar();
            break;
        
        case 'modificar':
            Modificar();
            break;
        
        case 'filtrar':
            filtrar();
            break;
        
        case 'previsualizar':
            PreViusualizar();
    }

    function ObtenerElementos() {

        if(!@ $archivo = fopen("./BACKEND/ciudadanos.json" , "r")) {

            echo "No se ha podido abrir el archivo.";
        }
        else {

            $lista = array();

            while(!feof($archivo)) {

                array_push($lista , json_decode(trim(fgets($archivo))));
            }

            fclose($archivo);
            return $lista;
        }
    }

    function Agregar() {

        if(!@ $archivo = fopen("./BACKEND/ciudadanos.json" , "a")) {

            echo "No se ha podido abrir el archivo.";
        }
        else {

            $elemento = json_decode($_POST["json"]);
            $nombreFoto = date("Gis").".".pathinfo($_FILES["foto"]["name"] , PATHINFO_EXTENSION);
            $rutaFoto = "./BACKEND/fotos/".$nombreFoto;
            $elemento->datosCiviles->foto = $nombreFoto;

            fwrite($archivo , json_encode($elemento)."\r\n");
            fclose($archivo);
            move_uploaded_file($_FILES["foto"]["tmp_name"] , $rutaFoto);

            echo "Se ha agregado correctamente.";
        }
    }

    function Eliminar() {

        /*
         * La funcion ObtenerElementos() abre el archivo y lo cierra. Si intento invocarla adentro del else, estare abriendo un archivo ya abierto y genera error.
         */
        $lista = ObtenerElementos();
        $contador = 0;

        if(!@ $archivo = fopen("./BACKEND/ciudadanos.json" , "w")) {
            
            echo "No se ha podido abrir el archivo.";
        }
        else {

            foreach($lista as $item) {

                if(@$item->datosCiviles->dni == $_POST["dni"]) {

                    unset($lista[$contador]);
                    unlink("./BACKEND/fotos/".$item->datosCiviles->foto);
                }

                if(isset($lista[$contador])) {

                    fwrite($archivo , trim(json_encode($lista[$contador]))."\r\n");
                }

                $contador++;
            }

            fclose($archivo);
            echo "Se ha dado de baja correctamente.";
        }
    }

    function Modificar() {

        $lista = ObtenerElementos();
        /*
         * Es importante usar el json_decode() en $_POST["json"] por que se recibe como un string.
         */
        $objetoModifcado = json_decode($_POST["json"]);
        $nombreFoto = date("Gis").".".pathinfo($_FILES["foto"]["name"] , PATHINFO_EXTENSION);
        $rutaFoto = "./BACKEND/fotos/".$nombreFoto;
        $contador = 0;
        $encontrado = false;

        if(!@ $archivo = fopen("./BACKEND/ciudadanos.json" , "w")) {

            echo "No se ha podido abrir el archivo.";
        }
        else {

            foreach($lista as $item) {

                if(@$item->datosCiviles->dni == $objetoModifcado->datosCiviles->dni) {

                    unlink("./BACKEND/fotos/".$item->datosCiviles->foto);
                    $lista[$contador] = $objetoModifcado;
                    $lista[$contador]->datosCiviles->foto = $nombreFoto;
                    $encontrado = true;
                }

                if(isset($lista[$contador])) {

                    fwrite($archivo , json_encode($lista[$contador])."\r\n");
                }

                $contador++;
            }

            if($encontrado) {

                move_uploaded_file($_FILES["foto"]["tmp_name"] , $rutaFoto);
            }

            fclose($archivo);
        }
    }

    function Filtrar() {

        $lista = ObtenerElementos();
        $listaFiltrada = array();
        $pais = $_POST["pais"];

        foreach($lista as $item) {

            if(@$item->datosCiviles->pais == $pais) {

                array_push($listaFiltrada , $item);
            }
        }

        echo json_encode($listaFiltrada);
    }

    function PreViusualizar() {

        echo pathinfo($_FILES["foto"]["tmp_name"] , PATHINFO_DIRNAME).pathinfo($_FILES["foto"]["tmp_name"] , PATHINFO_FILENAME).".".pathinfo($_FILES["foto"]["name"], PATHINFO_EXTENSION);
    }
?>