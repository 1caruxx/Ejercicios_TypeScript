<?php

    class Empleado {

        public $nombre;
        public $apellido;
        public $email;
        public $foto;
        public $legajo;
        public $clave;
        public $perfil;

        public function __construct($nombre, $apellido, $email, $foto, $legajo, $clave, $perfil) {

            $this->nombre = $nombre;
            $this->apellido = $apellido;
            $this->email = $email;
            $this->foto = $foto;
            $this->legajo = $legajo;
            $this->clave = $clave;
            $this->perfil = $perfil;
        }

        public static function ObtenerListado($response=null) {
            
            $datos = "mysql:host=localhost;dbname=donfubd";
            $user = "root";
            $pass = "";
            
            try {
            
                $conexcion = new PDO($datos , $user , $pass);
                $resultado = $conexcion->prepare("SELECT * FROM `empleados`");
                $resultado->execute();
                $empleados = array();

            
                while($fila = $resultado->fetch(PDO::FETCH_ASSOC)) {
            
                    array_push($empleados , new Empleado($fila["nombre"], $fila["apellido"],$fila["email"],$fila["foto"],$fila["legajo"],$fila["clave"],$fila["perfil"]));
                }
            }
            catch(Exception $exception) {
            
                $response->getBody()->write("Se ha atrapado una excepcion: ".$excepcion->getMessage());
            }
            
             return $empleados;
        }

        public static function Agregar($request, $response, $_AR) {

            $datos = "mysql:host=localhost;dbname=DonFuBD";
            $user = "root";
            $pass = "";
            $empleado = $request ->getParsedBody();
            $nombreFoto = date("Gis").".".pathinfo($_AR["foto"]["name"], PATHINFO_EXTENSION);
            $rutaFoto = "./img/".$nombreFoto;

            try {

                $conexcion = new PDO($datos, $user, $pass);
                $resultados = $conexcion ->prepare("INSERT INTO `empleados`(`nombre`, `apellido`, `email`, `foto`, `legajo`, `clave`, `perfil`) VALUES ('".$empleado["nombre"]."','".$empleado["apellido"]."','".$empleado["email"]."','".$nombreFoto."',".$empleado["legajo"].",'".$empleado["clave"]."','".$empleado["perfil"]."')");
                $resultados ->execute();
                move_uploaded_file($_AR["foto"]["tmp_name"], $rutaFoto);

                $response ->getBody() ->write("Se ha cargado correctamente el nuevo empleado.");
            }
            catch (Exception $exception) {

                $response ->getBody() ->write("Se ha atrapado una excepcion: ".$excepcion ->getMessage());
            }
        }

        public static function VerificarEmpleado($request , $response) {

            $datos = "mysql:host=localhost;dbname=DonFuBD";
            $user = "root";
            $pass = "";
            $empleado = $request ->getParsedBody();

            try {

                $conexcion = new PDO($datos, $user, $pass);
                
                $resultados = $conexcion ->prepare("SELECT * FROM `empleados` WHERE `email`='".$empleado["correo"]."' AND `clave`='".$empleado["clave"]."'");
                $resultados ->execute();
                $fila = $resultados ->fetch(PDO::FETCH_ASSOC);

                if ($fila) {

                    $objeto = new Empleado($fila["nombre"], $fila["apellido"],$fila["email"],$fila["foto"],$fila["legajo"],$fila["clave"],$fila["perfil"]);
                    $response ->getBody()->write(json_encode($objeto));
                }
                else {

                    $response->getBody()->write('{"valido":"false","usuario":"{}"}');
                }
            }
            catch (Exception $exception) {

                $response ->getBody() ->write("Se ha atrapado una excepcion: ".$exception ->getMessage());
            }

            return $response;

        }

        public static function Listar($request , $response) {

            $response->getBody()->write(json_encode(Empleado::ObtenerListado()));
            return $response;
        }

        public function MiddlewareVerificarEmpleado($request , $response , $next) {

            $datos = "mysql:host=localhost;dbname=DonFuBD";
            $user = "root";
            $pass = "";
            $empleado = $request ->getParsedBody();

            try {

                $conexcion = new PDO($datos, $user, $pass);
                
                $resultados = $conexcion ->prepare("SELECT * FROM `empleados` WHERE `email`='".$empleado["correo"]."' AND `clave`='".$empleado["clave"]."'");
                $resultados ->execute();
                $fila = $resultados ->fetch(PDO::FETCH_ASSOC);

                var_dump($fila);

                if($fila) {

                    $objeto = new Empleado($fila["nombre"], $fila["apellido"],$fila["email"],$fila["foto"],$fila["legajo"],$fila["clave"],$fila["perfil"]);
                    $response ->getBody()->write('{"valido":"true","usuario":"'.json_encode($objeto).'"}');

                    if($objeto->perfil == "admin") {

                        $response = $next($request , $response);
                    }
                    else {

                        if($request->isPost()) {

                            $response = $next($request , $response);
                        }
                        else {

                            $response ->getBody()->write("No tenes permisos.");

                        }
                    }
                }
                else {

                    $response->getBody()->write('{"valido":"false","usuario":"{}"}');
                }
            }
            catch (Exception $exception) {

                $response ->getBody() ->write("Se ha atrapado una excepcion: ".$exception ->getMessage());
            }

            return $response;
        }
    }
?>