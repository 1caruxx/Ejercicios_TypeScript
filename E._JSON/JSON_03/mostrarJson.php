<?php

    $array = array();
    $array = json_decode($_REQUEST["json"]);
    var_dump($array);

    //=====================================

    $objeto = new stdClass();
    $objeto = json_decode($_REQUEST["json"]);

    echo "\nNombre: ".$objeto->nombre." en PHP".
         "\nPrecio: ".$objeto->precio." en PHP".
         "\nCodigo de barra: ".$objeto->codigoBarra." en PHP";
?>