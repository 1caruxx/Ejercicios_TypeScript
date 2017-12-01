<?php

    require_once "./vendor/autoload.php";
    use \Firebase\JWT\JWT;

    class Empleado {

        public $nombre;
        public $apellido;
        public $email;
        public $foto;
        public $legajo;
        public $clave;
        public $perfil;

        public function __construct($nombre , $apellido , $email , $foto , $legajo , $clave , $perfil) {

            $this->nombre = $nombre;
            $this->apellido = $apellido;
            $this->email = $email;
            $this->foto = $foto;
            $this->legajo = $legajo;
            $this->clave = $clave;
            $this->perfil = $perfil;
        }

        public static function Agregar($request , $response , $archivo) {

            $datos = "mysql:host=localhost;dbname=donfubd";
            $user = "root";
            $pass = "";
            $datosEmpleado = $request->getParsedBody();
            $foto = date("Gis").".".pathinfo($archivo["foto"]["name"] , PATHINFO_EXTENSION);
            $rutaFoto = "./img/".$foto;

            try {

                $conexcion = new PDO($datos , $user , $pass);
                $resultados = $conexcion->prepare("INSERT INTO `empleados`(`nombre`, `apellido`, `email`, `foto`, `legajo`, `clave`, `perfil`) VALUES ('".$datosEmpleado["nombre"]."','".$datosEmpleado["apellido"]."','".$datosEmpleado["email"]."','".$foto."',".$datosEmpleado["legajo"].",'".$datosEmpleado["clave"]."','".$datosEmpleado["perfil"]."')");
                $resultados->execute();

                move_uploaded_file($archivo["foto"]["tmp_name"] , $rutaFoto);

                $response->getBody()->write("Se ha cargado correctamente el empleado.");
            }
            catch(Exception $exception) {

                $response->getBody()->write("Se ha atrapado una excepcion: ".$exception->getMessage());
            }
        }

        public static function VerificarEmpleado($request , $response) {

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
                    $ahora = time();
                    $key = "12345";
                    $token = array(

                        "empleado" => json_encode($empleado),
                        //"exp" => $ahora + (60)
                    );
                    $jwt = JWT::encode($token, $key);

                    $response->getBody()->write('{"valido":"true","usuario":'.json_encode($empleado).',"token":"'.$jwt.'"}');
                }
                else {

                    $response->getBody()->write('{"valido":"false","usuario":{}}');
                }
            }
            catch(Exception $exception) {

                $response->getBody()->write("Se ha atrapado una excepcion: ".$exception->getMessage());
            }
        }

        public static function RetornarEmpleados($response) {

            $datos = "mysql:host=localhost;dbname=donfubd";
            $user = "root";
            $pass = "";
            $empleados = array();

            try {

                $conexcion = new PDO($datos , $user , $pass);
                $resultados = $conexcion->prepare("SELECT `id`,`nombre`,`apellido`,`email`,`foto`, `legajo`,`clave`,`perfil` FROM `empleados` WHERE 1");
                $resultados->execute();

                while($fila = $resultados->fetch(PDO::FETCH_ASSOC)) {

                    array_push($empleados , $fila);
                }

                $response->getBody()->write(json_encode($empleados));
            }
            catch(Exception $exception) {

                $response->getBody()->write("Se ha atrapado una excepcion: ".$exception->getMesagge());
            }
        }
    }

?>