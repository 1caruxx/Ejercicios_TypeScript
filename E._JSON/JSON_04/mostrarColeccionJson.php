<?php

    var_dump($_REQUEST["json"]);

    $objeto = json_decode($_REQUEST["json"]);

    for($i=0 ; $i<count($objeto) ; $i++) {

        echo "Nombre: ".$objeto[$i]->nombre.
             "\nPrecio: ".$objeto[$i]->precio.
             "\nCodigo de barra: ".$objeto[$i]->codigoBarra.
             "\n";
    }
?>