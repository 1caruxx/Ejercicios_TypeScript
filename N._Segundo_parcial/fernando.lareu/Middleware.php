<?php

    require_once "./Empleado.php";
    require_once "./vendor/autoload.php";
    use \Firebase\JWT\JWT;

    class Middleware {

        public static function VerificarEmpleado($request , $response , $next) {

            $datos = "mysql:host=localhost;dbname=donfubd";
            $user = "root";
            $pass = "";
            $datosEmpleado = $request->getParsedBody();

            try {

                $conexcion = new PDO($datos , $user , $pass);
                $resultados = $conexcion->prepare("SELECT `id`, `nombre`, `apellido`, `email`, `foto`, `legajo`, `clave`, `perfil` FROM `empleados` WHERE `email`='".$datosEmpleado["email"]."' and `clave`='".$datosEmpleado["clave"]."'");
                $resultados->execute();

                if($fila = $resultados->fetch(PDO::FETCH_ASSOC)) {

                    $empleado = new Empleado($fila["nombre"] , $fila["apellido"] , $datosEmpleado["email"] , $fila["foto"] , $fila["legajo"] , $fila["clave"] , $fila["perfil"]);

                    $response->getBody()->write('{"valido":"true","usuario":'.json_encode($empleado).'}');

                    if($empleado->perfil == "admin") {

                        $response = $next($request , $response);
                    }
                    else {

                        if($empleado->perfil=="user" && $request->isPost()) {

                            $response = $next($request , $response);
                        }
                        else {

                            $response->getBody()->write("No tienes permisos para realizar esta operacion.");
                        }
                    }
                }
                else {

                    $response->getBody()->write('{"valido":"false","usuario":{}}');
                }
            }
            catch(Exception $exception) {

                $response->getBody()->write("Se ha atrapado una excepcion: ".$exception->getMessage());
            }

            return $response;
        }

        public static function EscribirArchivo($request , $response , $next) {

            if(!@ $archivo = fopen("./data.log" , "a")) {

                $response->getBody()->write("No se ha podido abrir el archivo.");
            }
            else {

                fwrite();
            }

            return $response;
        }

        public static function VerificarToken($request , $response , $next , $token) {

            try {

                $JWTdecodeado = JWT::decode($token , "12345" , array('HS256'));
                $response->getBody()->write("JWT Valido.\n");
                $response = $next($request , $response);
            }
            catch(Exception $excepcion) {
                
                $response->getBody()->write("Se ha atrapado una excepcion: ".$excepcion->getMessage());
            }
                
            return $response;
        }
    }

?>