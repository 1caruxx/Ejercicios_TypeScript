<?php

    use \Psr\Http\Message\ServerRequestInterface as Request;
    use \Psr\Http\Message\ResponseInterface as Response;

    require_once './vendor/autoload.php';
    require_once './src/BACKEND/clases/Validadora.php';
    require_once './src/BACKEND/clases/Archivo.php';
    require_once './src/BACKEND/clases/BaseDeDatos.php';

    $config['displayErrorDetails'] = true;
    $config['addContentLengthHeader'] = false;

    $app = new \Slim\App(["settings" => $config]);

    $app->post("/login[/]" , function(Request $request , Response $response) {

        return $response;
    })->add(\Archivo::class . ":LogearAusuario");

    $app->group("/archivo" , function() {

        $this->get("/listar[/]" , function(Request $request , Response $response) {

            Archivo::Listar($request , $response);
        });

        $this->post("/alta[/]" , function(Request $request , Response $response) {

            Archivo::Agregar($request , $response , $_FILES);
        })->add(\Archivo::class . ":VerificarQueNoExista");

        $this->delete("/baja[/]" , function(Request $request , Response $response) {

            Archivo::Eliminar($request , $response);
        })->add(\Archivo::class . ":VerificarExistencia");

        $this->post("/modificacion[/]" , function(Request $request , Response $response) {

            Archivo::Modificar($request , $response , $_FILES);
        })->add(\Archivo::class . ":VerificarExistencia");
    })->add(function($request , $response , $next) {

        Validadora::ValidarToken($request , $response , $next , apache_request_headers());
        return $response;
    });

    $app->group("/BD" , function() {

        $this->get("/listar[/]" , function(Request $request , Response $response) {

            return json_encode(BaseDeDatos::ObtenerListado($request , $response));
        });
            
        $this->post("/alta[/]" , function(Request $request , Response $response) {
            
            BaseDeDatos::Agregar($request , $response , $_FILES);
        })->add(\BaseDeDatos::class . ":VerificarQueNoExista");
            
        $this->delete("/baja[/]" , function($request , $response) {
            
            BaseDeDatos::Eliminar($request , $response);
            return $response;
        })->add(function($request , $response , $next) {

            Validadora::VerificarRoot($request , $response , $next , apache_request_headers());
            return $response;
        });
            
        $this->post("/modificacion[/]" , function($request , $response) {
            
            BaseDeDatos::Modificar($request , $response , $_FILES);
        })->add(\BaseDeDatos::class . ":VerificarExistencia");

    })->add(function($request , $response , $next) {
        
        Validadora::ValidarToken($request , $response , $next , apache_request_headers());
        return $response;
    });

    $app->run();
?>