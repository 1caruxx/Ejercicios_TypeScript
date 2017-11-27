<?php

    class Middleware {

        private static $cantidad=0;

        public static function ContarVeces($request , $response , $next) {

            if(!@ $archivo = fopen("./archivo.txt" , "wr")) {

                $response->getBody()->write("No se ha podido abrir el archivo.");
            }
            else {

   
                Middleware::$cantidad++;

                fwrite($archivo , Middleware::$cantidad);
                

                fclose($archivo);
            }

            return $response;
        }
    }
?>