<?php

    $numero1 = $_REQUEST["numero1"];
    $numero2 = $_REQUEST["numero2"];
    $operador = $_REQUEST["operador"];

    switch($operador) {

        case 'suma':
            $resultado = $numero1 + $numero2;
            break;

         case '-':
            $resultado = $numero1 - $numero2;
            break;

        case '*':
            $resultado = $numero1 * $numero2;
            break;

        default:

            if($numero2 != 0) {

                $resultado = $numero1 / $numero2;
            }
            else {

                echo "false";
                die();
            }
    }

    echo $resultado;
?>