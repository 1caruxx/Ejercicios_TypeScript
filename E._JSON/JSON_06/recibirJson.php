<?php

    $JSON = new stdClass();
    $array = array();

    $JSON->codigoBarra = 123;
    $JSON->nombre = "Caramelo";
    $JSON->precio = 2.5;

    array_push($array , $JSON);

    $JSON->codigoBarra = 456;
    $JSON->nombre = "Cigarillo";
    $JSON->precio = 22.5;

    array_push($array , $JSON);

    $JSON->codigoBarra = 789;
    $JSON->nombre = "Galleta";
    $JSON->precio = 5;

    array_push($array , $JSON);

    echo json_encode($array);
?>