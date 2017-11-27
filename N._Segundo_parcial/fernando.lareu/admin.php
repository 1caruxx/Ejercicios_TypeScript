<?php

    use \Psr\Http\Message\ServerRequestInterface as Request;
    use \Psr\Http\Message\ResponseInterface as Response;

    require_once './vendor/autoload.php';
    require_once "./Empleado.php";
    require_once "./Producto.php";
    require_once "./Middleware.php";

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
        
        Empleado::Listar($request , $response);
        return $response;
    });

    $app->group("/productos" , function() {

        $this->post("[/]" , function(Request $request , Response $response) {
        
            Producto::Agregar($request, $response);
            return $response;
        })->add(\Empleado::class . ":MiddlewareVerificarEmpleado");

        $this->get("[/]" , function(Request $request , Response $response) {

            Producto::Listar($request, $response);
            return $response;
        });

        $this->put("[/]" , function(Request $request , Response $response) {
            
            Producto::Modificar($request, $response);
            return $response;
        })->add(\Empleado::class . ":MiddlewareVerificarEmpleado");

        $this->delete("[/]" , function(Request $request , Response $response) {
            
            Producto::Eliminar($request, $response);
            return $response;
        })->add(\Empleado::class . ":MiddlewareVerificarEmpleado");
    });

    /*$app->add(function($request , $response , $next) {

        Middleware::ContarVeces($request , $response , $next);
        return $response;
    });*/

    $app->run();
?>