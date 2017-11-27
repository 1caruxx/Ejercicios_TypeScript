<?php

    class Producto {

        public $nombre;
        public $precio;

        public function __construct($nombre, $precio) {
    
            $this->nombre = $nombre;
            $this->precio = $precio;
        }

        public static function ObtenerListado($response=null) {
            
            $datos = "mysql:host=localhost;dbname=donfubd";
            $user = "root";
            $pass = "";
            
            try {
            
                $conexcion = new PDO($datos , $user , $pass);
                $resultado = $conexcion->prepare("SELECT * FROM `productos`");
                $resultado->execute();
                $productos = array();

            
                while($fila = $resultado->fetch(PDO::FETCH_ASSOC)) {
            
                    array_push($productos , new Producto($fila["nombre"] , $fila["precio"]));
                }
            }
            catch(Exception $exception) {
            
                $response->getBody()->write("Se ha atrapado una excepcion: ".$excepcion->getMessage());
            }
            
             return $productos;
        }

        public static function Agregar($request, $response) {

            $datos = "mysql:host=localhost;dbname=DonFuBD";
            $user = "root";
            $pass = "";
            $producto = $request->getParsedBody();

            try {
            
                $conexcion = new PDO($datos, $user, $pass);
                $resultados = $conexcion ->prepare("INSERT INTO `productos`(`nombre`, `precio`) VALUES ('".$producto["nombre"]."','".$producto["precio"]."')");
                $resultados ->execute();

                $response->getBody()->write("Se ha cargado correctamente el nuevo producto.");
            }
            catch (Exception $exception) {
            
                $response ->getBody()->write("Se ha atrapado una excepcion: ".$excepcion ->getMessage());
            }

            return $response;
        }

        public static function Listar($request , $response) {
            
            $response->getBody()->write(json_encode(Producto::ObtenerListado()));
            return $response;
        }

        public static function Modificar($request , $response) {

            $datos = "mysql:host=localhost;dbname=donfubd";
            $user = "root";
            $pass = "";
            $producto = $request->getParsedBody();

            try {

                $conexcion = new PDO($datos , $user , $pass);
        
                $resultados = $conexcion->prepare("UPDATE `productos` SET `nombre`='".$producto["nombre"]."',`precio`='".$producto["precio"]."' WHERE `id`=".$producto["id"]);
                $resultados->execute();

                $response->getBody()->write("Se ha modificado correctamente.");
            }
            catch(Exception $exception) {

                $response->getBody()->write("Se ha atrapado una excepcion: ".$excepcion->getMessage());
            }

            return $response;
        }

        public static function Eliminar($request , $response) {

            $datos = "mysql:host=localhost;dbname=donfubd";
            $user = "root";
            $pass = "";
            $producto = $request->getParsedBody();
            
            try {

                $conexcion = new PDO($datos , $user , $pass);
                    
                $resultados = $conexcion->prepare("DELETE FROM `productos` WHERE `id`='".$producto["id"]."'");
                $resultados->execute();
            
                $response->getBody()->write("Se ha dado de baja correctamente.");
            }
            catch(Exception $exception) {
            
                $response->getBody()->write("Se ha atrapado una excepcion: ".$excepcion->getMessage());
            }
            
            return $response;
        }
    }
?>