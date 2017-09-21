<?php

    $JSON = new stdClass();

    $JSON->codigoBarra = 123;
    $JSON->nombre = "Caramelo";
    $JSON->precio = 2.5;

    echo json_encode($JSON);
?>