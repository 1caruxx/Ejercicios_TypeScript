<?php

    sleep(rand(0 , 6));

    if(rand(0 , 1)) {

        echo "Nombre de usuario disponible.";
    }
    else {

        echo "Nombre de usuario ocupado.";
    }
?>