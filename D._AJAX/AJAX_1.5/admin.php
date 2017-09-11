<?php

    $contador = 0;

    for($i=1 ; $i<$_REQUEST["txtValor"] ; $i++) {

        if($i%2 != 0) {

            $contador++;
        }
    }

    echo "La cantidad de impares es: ".$contador;
?>