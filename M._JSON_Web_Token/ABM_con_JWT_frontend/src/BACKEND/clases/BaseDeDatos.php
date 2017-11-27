<?php

    require_once "./src/BACKEND/clases/Usuario.php";
    require_once "./src/BACKEND/clases/Validadora.php";
    require_once './vendor/autoload.php';
    use \Firebase\JWT\JWT;

    class BaseDeDatos {

        public static function ObtenerListado($response=null) {

            $datos = "mysql:host=localhost;dbname=jwt";
            $user = "root";
            $pass = "";

            try {

                $conexcion = new PDO($datos , $user , $pass);
                $resultado = $conexcion->prepare("SELECT * FROM `usuarios`");
                $resultado->execute();
                $usuarios = array();
                $retorno = array();

                while($fila = $resultado->fetch(PDO::FETCH_ASSOC)) {

                    array_push($usuarios , new Usuario($fila["_correo"] , $fila["_clave"] , $fila["_perfil"] , $fila["_foto"]));
                }
            }
            catch(Exception $exception) {

                $response->getBody()->write("Se ha atrapado una excepcion: ".$excepcion->getMessage());
            }

            $retorno["usuarios"] = $usuarios;
            $retorno["response"] = $response;

            return $retorno;
        }

        public function LogearAusuario($request , $response , $next) {

            $usuario = $request->getParsedBody();

            $datos = "mysql:host=localhost;dbname=jwt";
            $user = "root";
            $pass = "";
            $usuario = $request->getParsedBody();

            try {

                $conexcion = new PDO($datos , $user , $pass);
                $correo = $usuario["correo"];
                $clave = $usuario["clave"];
                $resultados = $conexcion->prepare("SELECT * FROM `usuarios` WHERE `_correo`='".$usuario["correo"]."' AND `_clave`='".$usuario["clave"]."'");
                $resultados->execute();
                $fila = $resultados->fetch(PDO::FETCH_ASSOC);

                if($fila) {

                    $key = "12345";
                    $token = array(
                        "correo" => $fila["_correo"],
                        "clave" => $fila["_clave"],
                        "perfil" => $fila["_perfil"]
                    );
    
                    $jwt = JWT::encode($token, $key);
    
                    $response->getBody()->write($jwt);
                    $response = $next($request , $response);
                }
                else {

                    $response->getBody()->write("Usuario inexistente.\n");
                }
            }
            catch(Exception $exception) {

                $response->getBody()->write("Se ha atrapado una excepcion: ".$excepcion->getMessage());
            }
            
            return $response;
        }

        public function VerificarExistencia($request , $response , $next) {

            $datos = "mysql:host=localhost;dbname=jwt";
            $user = "root";
            $pass = "";
            $usuario = $request->getParsedBody();

            try {

                $conexcion = new PDO($datos , $user , $pass);
                $resultados = $conexcion->prepare("SELECT `_correo` FROM `usuarios` WHERE `_correo`='".$usuario["correo"]."'");
                $resultados->execute();
                $fila = $resultados->fetch(PDO::FETCH_ASSOC);

                if($fila) {

                    $response = $next($request , $response);
                }
                else {

                    $response->getBody()->write("Usuario inexistente.\n");
                }
            }
            catch(Exception $exception) {

                $response->getBody()->write("Se ha atrapado una excepcion: ".$excepcion->getMessage());
            }
            
            return $response;
        }

        public function VerificarQueNoExista($request , $response , $next) {

            $datos = "mysql:host=localhost;dbname=jwt";
            $user = "root";
            $pass = "";
            $usuario = $request->getParsedBody();

            try {

                $conexcion = new PDO($datos , $user , $pass);
                $resultados = $conexcion->prepare("SELECT `_correo` FROM `usuarios` WHERE `_correo`='".$usuario["correo"]."'");
                $resultados->execute();
                $fila = $resultados->fetch(PDO::FETCH_ASSOC);

                if($fila) {
                    
                    $response->getBody()->write("Este usuario ya fue previamente cargado.\n");
                }
                else {

                    $response = $next($request , $response);
                }
            }
            catch(Exception $exception) {

                $response->getBody()->write("Se ha atrapado una excepcion: ".$excepcion->getMessage());
            }

            return $response;
        }

        public static function Agregar($request , $response , $_AR) {

            $datos = "mysql:host=localhost;dbname=jwt";
            $user = "root";
            $pass = "";
            $usuario = $request->getParsedBody();
            $nombreFoto = date("Gis").".".pathinfo($_AR["foto"]["name"] , PATHINFO_EXTENSION);
            $rutaFoto = "./src/BACKEND/img/".$nombreFoto; 

            try {

                $conexcion = new PDO($datos , $user , $pass);
                $resultados = $conexcion->prepare("INSERT INTO `usuarios`(`_correo`, `_clave`, `_perfil`, `_foto`) VALUES ('".$usuario["correo"]."','".$usuario["clave"]."','".$usuario["perfil"]."','".$nombreFoto."')");
                $resultados->execute();
                move_uploaded_file($_AR["foto"]["tmp_name"] , $rutaFoto);

                $response->getBody()->write("Se ha cargado correctamente el nuevo usuario.");
            }
            catch(Exception $exception) {

                $response->getBody()->write("Se ha atrapado una excepcion: ".$excepcion->getMessage());
            }
        }

        public static function Eliminar($request , $response) {

            $datos = "mysql:host=localhost;dbname=jwt";
            $user = "root";
            $pass = "";
            $usuario = $request->getParsedBody();

            try {

                $conexcion = new PDO($datos , $user , $pass);
                $resultados = $conexcion->prepare("SELECT `_foto` FROM `usuarios` WHERE `_correo`='".$usuario["correo"]."'");
                $resultados->execute();
                unlink("./src/BACKEND/img/".$resultados->fetch(PDO::FETCH_ASSOC)["_foto"]);

                $resultados = $conexcion->prepare("DELETE FROM `usuarios` WHERE `_correo`='".$usuario["correo"]."'");
                $resultados->execute();

                $response->getBody()->write("Se ha dado de baja correctamente.");
            }
            catch(Exception $exception) {

                $response->getBody()->write("Se ha atrapado una excepcion: ".$excepcion->getMessage());
            }

            return $response;
        }

        public static function Modificar($request , $response , $_AR) {

            $datos = "mysql:host=localhost;dbname=jwt";
            $user = "root";
            $pass = "";
            $usuario = $request->getParsedBody();
            $nombreFoto = date("Gis").".".pathinfo($_AR["foto"]["name"] , PATHINFO_EXTENSION);
            $rutaFoto = "./src/BACKEND/img/".$nombreFoto; 

            try {

                $conexcion = new PDO($datos , $user , $pass);
                $resultados = $conexcion->prepare("SELECT `_foto` FROM `usuarios` WHERE `_correo`='".$usuario["correo"]."'");
                $resultados->execute();
                unlink("./src/BACKEND/img/".$resultados->fetch(PDO::FETCH_ASSOC)["_foto"]);
                move_uploaded_file($_AR["foto"]["tmp_name"] , $rutaFoto);

                $resultados = $conexcion->prepare("UPDATE `usuarios` SET `_clave`='".$usuario["clave"]."',`_perfil`='".$usuario["perfil"]."',`_foto`='".$nombreFoto."' WHERE `_correo`='".$usuario["correo"]."'");
                $resultados->execute();

                $response->getBody()->write("Se ha modificado correctamente.");
            }
            catch(Exception $exception) {

                $response->getBody()->write("Se ha atrapado una excepcion: ".$excepcion->getMessage());
            }

            return $response;
        }
    }
?>