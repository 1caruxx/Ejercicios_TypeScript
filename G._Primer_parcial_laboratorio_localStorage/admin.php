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

        $nombreFoto = date("Gis").".".pathinfo($_FILES["foto"]["name"] , PATHINFO_EXTENSION);
        $rutaFoto = "./BACKEND/fotos/".$nombreFoto;

        move_uploaded_file($_FILES["foto"]["tmp_name"] , $rutaFoto);

        echo $nombreFoto;
    }

    function Eliminar() {

        /*
         * La funcion ObtenerElementos() abre el archivo y lo cierra. Si intento invocarla adentro del else, estare abriendo un archivo ya abierto y genera error.
         */
        unlink("./BACKEND/fotos/".$_POST["foto"]);

        echo "Se ha dado de baja correctamente.";
    }

    function Modificar() {

        $nombreFoto = date("Gis").".".pathinfo($_FILES["foto"]["name"] , PATHINFO_EXTENSION);
        $rutaFoto = "./BACKEND/fotos/".$nombreFoto;

        unlink("./BACKEND/fotos/".$_POST["nombreFoto"]);
        move_uploaded_file($_FILES["foto"]["tmp_name"] , $rutaFoto);
        echo $nombreFoto;
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