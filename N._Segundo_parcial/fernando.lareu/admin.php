<?php

    use \Psr\Http\Message\ServerRequestInterface as Request;
    use \Psr\Http\Message\ResponseInterface as Response;

    require_once './vendor/autoload.php';
    require_once './Empleado.php';
    require_once './Producto.php';
    require_once './Middleware.php';

    $config['displayErrorDetails'] = true;
    $config['addContentLengthHeader'] = false;

    $app = new \Slim\App(["settings" => $config]);

    $app->post("[/]" , function(Request $request , Response $response) {

        Empleado::Agregar($request , $response , $_FILES);
        return $response;
    });

    $app->post("/email/clave[/]" , function(Request $request , Response $response) {

        Empleado::VerificarEmpleado($request , $response);
        return $response;
    });

    $app->get("[/]" , function(Request $request , Response $response) {

        Empleado::RetornarEmpleados($response);
        return $response;
    });

    $app->group("/productos" , function() {

        $this->post("[/]" , function(Request $request , Response $response) {

            $datosProducto = $request->getParsedBody();
            $consulta = "INSERT INTO `productos`(`nombre`,`precio`) VALUES ('".$datosProducto["nombre"]."','".$datosProducto["precio"]."')";

            Producto::AdministrarBase($request , $response , $consulta);
            return $response;
        })->add(function($request , $response , $next) {

            Middleware::VerificarToken($request , $response , $next , apache_request_headers()["token"]);
            return $response;
        });

        $this->get("[/]" , function(Request $request , Response $response) {

            Producto::RetornarProductos($response);
            return $response;
        });

        $this->put("[/]" , function(Request $request , Response $response) {

            $datosProducto = $request->getParsedBody();
            $consulta = "UPDATE `productos` SET `nombre`='".$datosProducto["nombre"]."',`precio`=".$datosProducto["precio"]." WHERE `id`=".$datosProducto["id"];
            
            Producto::AdministrarBase($request , $response , $consulta);
            return $response;
        })->add(function($request , $response , $next) {

            Middleware::VerificarToken($request , $response , $next , apache_request_headers()["token"]);
            return $response;
        });

        $this->delete("[/]" , function(Request $request , Response $response) {

            $datosProducto = $request->getParsedBody();
            $consulta = "DELETE FROM `productos` WHERE `id`=".$datosProducto["id"];
                        
            Producto::AdministrarBase($request , $response , $consulta);
            return $response;
        })->add(function($request , $response , $next) {
            
            Middleware::VerificarToken($request , $response , $next , apache_request_headers()["token"]);
            return $response;
        });
    });

    $app->run();
?>