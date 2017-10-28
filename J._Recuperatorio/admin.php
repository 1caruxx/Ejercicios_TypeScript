<?php

    require_once "./funciones.php";

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
?>