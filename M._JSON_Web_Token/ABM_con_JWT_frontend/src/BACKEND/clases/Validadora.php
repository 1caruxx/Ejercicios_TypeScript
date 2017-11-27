<?php

    require_once './vendor/autoload.php';
    use \Firebase\JWT\JWT;

    class Validadora {

        public static function ValidarToken($request , $response , $next , $header) {

            try {
            
                $JWTdecodeado = JWT::decode($header["token"] , "12345" , array('HS256'));
                $response = $next($request , $response);
            }
            catch(Exception $excepcion) {
            
                $response->getBody()->write("Se ha atrapado una excepcion: ".$excepcion->getMessage());
            }
            
            return $response;
        }

        public static function VerificarExistencia($listado , $request , $response , $next) {
            
            $usuario = $request->getParsedBody();
            $listaDeUsuarios = $listado["usuarios"];
            $response = $listado["response"];
            $encontrado = false;
            
            foreach($listaDeUsuarios as $item) {
            
                if($usuario["correo"]==$item->GetCorreo()) {
                        
                    $encontrado = true;
                    break;
                }
            }
                        
            if($encontrado) {
                        
                $response = $next($request , $response);
            }
            else {
                        
                $response->getBody()->write("Usuario inexistente.\n");
            }
                        
            return $response;
        }

        public static function VerificarQueNoExista($listado , $request , $response , $next) {

            $usuario = $request->getParsedBody();
            $listaDeUsuarios = $listado["usuarios"];
            $response = $listado["response"];
            $encontrado = false;

            foreach($listaDeUsuarios as $item) {

                if($usuario["correo"]==$item->GetCorreo()) {

                    $encontrado = true;
                    break;
                }
            }

            if($encontrado) {

                $response->getBody()->write("Este usuario ya fue previamente cargado.\n");
            }
            else {

                $response = $next($request , $response);
            }

            return $response;
        }

        public static function VerificarRoot($request , $response , $next , $header) {

            $JWTdecodeado = JWT::decode($header["token"] , "12345" , array('HS256'));

            if($JWTdecodeado->perfil == "root") {

                $response = $next($request , $response);
            }
            else {

                if(!@ $archivo = fopen("./src/BACKEND/archivo/data.log" , "a")) {

                    $response->getBody()->write("No se ha podido abrir el archivo.");
                }
                else {

                    fwrite($archivo , "El usuario: ".$JWTdecodeado->correo." ha intentado eliminar a otro usuario a las: ".date("H:i:s")." el dia: ".date("d-m-Y")."\r\n");
                    fclose($archivo);
                }

                $response->getBody()->write("No tiene permisos para eliminar.");
            }

            return $response;
        }
    }
?>