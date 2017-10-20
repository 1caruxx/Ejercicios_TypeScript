<?php

    switch($_POST["accion"]) {

        case 'agregar':

            agregar();
            break;

        case 'listar':

            echo json_encode(array_filter(ObtenerElementos("./BACKEND/autos.json")));
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
            break;
        
        case 'mostrarEliminados':
            echo json_encode(array_filter(ObtenerElementos("./BACKEND/autosEliminados.json")));
    }

    function ObtenerElementos($ruta) {

        if(!@ $archivo = fopen($ruta , "r")) {

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

        if(!@ $archivo = fopen("./BACKEND/autos.json" , "a")) {

            echo "No se ha podido abrir el archivo.";
        }
        else {

            $elemento = json_decode($_POST["json"]);
            $nombreFoto = date("Gis").".".pathinfo($_FILES["foto"]["name"] , PATHINFO_EXTENSION);
            $rutaFoto = "./BACKEND/fotos/".$nombreFoto;
            $elemento->estetica->foto = $nombreFoto;

            fwrite($archivo , json_encode($elemento)."\r\n");
            fclose($archivo);
            move_uploaded_file($_FILES["foto"]["tmp_name"] , $rutaFoto);

            echo "Se ha agregado correctamente.";
        }
    }

    function Eliminar() {

        $lista = ObtenerElementos("./BACKEND/autos.json");
        $contador = 0;

        if(!@ $archivo = fopen("./BACKEND/autos.json" , "w")) {
            
            echo "No se ha podido abrir el archivo.";
        }
        else {

            foreach($lista as $item) {

                if(@$item->datos->patente == $_POST["patente"]) {

                    if(!@ $archivoEliminados = fopen("./BACKEND/autosEliminados.json" , "a")) {

                        echo "No se ha podido abrir el archivo.";
                    }
                    else {

                        fwrite($archivoEliminados , trim(json_encode($lista[$contador]))."\r\n");
                    }

                    unset($lista[$contador]);
                    unlink("./BACKEND/fotos/".$item->estetica->foto);
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

        $lista = ObtenerElementos("./BACKEND/autos.json");

        $objetoModifcado = json_decode($_POST["json"]);
        $nombreFoto = date("Gis").".".pathinfo($_FILES["foto"]["name"] , PATHINFO_EXTENSION);
        $rutaFoto = "./BACKEND/fotos/".$nombreFoto;
        $contador = 0;
        $encontrado = false;

        if(!@ $archivo = fopen("./BACKEND/autos.json" , "w")) {

            echo "No se ha podido abrir el archivo.";
        }
        else {

            foreach($lista as $item) {

                if(@$item->datos->patente == $objetoModifcado->datos->patente) {

                    unlink("./BACKEND/fotos/".$item->estetica->foto);
                    $lista[$contador] = $objetoModifcado;
                    $lista[$contador]->estetica->foto = $nombreFoto;
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

        $lista = ObtenerElementos("./BACKEND/autos.json");
        $listaFiltrada = array();
        $marca = $_POST["marca"];

        foreach($lista as $item) {

            if(@$item->datos->marca == $marca) {

                array_push($listaFiltrada , $item);
            }
        }

        echo json_encode($listaFiltrada);
    }

    function PreViusualizar() {

        echo pathinfo($_FILES["foto"]["tmp_name"] , PATHINFO_DIRNAME).pathinfo($_FILES["foto"]["tmp_name"] , PATHINFO_FILENAME).".".pathinfo($_FILES["foto"]["name"], PATHINFO_EXTENSION);
    }
?>