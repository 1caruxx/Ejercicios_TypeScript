<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../composer/vendor/autoload.php';

require_once '/clases/AutentificadorJWT.php';
require_once '/clases/MWparaCORS.php';
require_once '/clases/MWparaAutentificar.php';
require_once '/clases/Usuario.php';

$config['displayErrorDetails'] = TRUE;
$config['addContentLengthHeader'] = FALSE;

/*
¡La primera línea es la más importante! A su vez en el modo de 
desarrollo para obtener información sobre los errores
 (sin él, Slim por lo menos registrar los errores por lo que si está utilizando
  el construido en PHP webserver, entonces usted verá en la salida de la consola 
  que es útil).
  La segunda línea permite al servidor web establecer el encabezado Content-Length, 
  lo que hace que Slim se comporte de manera más predecible.
*/
$app = new \Slim\App(["settings" => $config]);

//************************************************************************************************************//
//************************************************************************************************************//
$app->post("/jwt/CrearToken[/]", function (Request $request, Response $response) {

    $datos = array('usuario'=>'usuario', 'clave'=>'clave');

    $token = AutentificadorJWT::CrearToken($datos);
    
    return $response->withJson($token, 200);
});

$app->post("/jwt/VerificarToken[/]", function (Request $request, Response $response) {
  
      $ArrayDeParametros = $request->getParsedBody();
      $token = $ArrayDeParametros['token'];

      AutentificadorJWT::VerificarToken($token);

      return "Token válido!!!";
});

$app->post("/jwt/ObtenerPayLoad[/]", function (Request $request, Response $response) {
  
      $ArrayDeParametros = $request->getParsedBody();
      $token = $ArrayDeParametros['token'];

      $payLoad = AutentificadorJWT::ObtenerPayLoad($token);

      return $response->withJson($payLoad, 200);
});

$app->post("/jwt/ObtenerData[/]", function (Request $request, Response $response) {
  
      $ArrayDeParametros = $request->getParsedBody();
      $token = $ArrayDeParametros['token'];

      $data = AutentificadorJWT::ObtenerData($token);

      return $response->withJson($data, 200);
});
//************************************************************************************************************//
//************************************************************************************************************//





$app->post('/ingreso/', function (Request $request, Response $response) {    
    
	$token = "";
  $ArrayDeParametros = $request->getParsedBody();
  
  if(isset($ArrayDeParametros['usuario']) && isset($ArrayDeParametros['clave'])) {

        $usuario = $ArrayDeParametros['usuario'];
        $clave = $ArrayDeParametros['clave'];
      
        if(Usuario::esValido($usuario, $clave)) {

          $datos = array('usuario'=>$usuario, 'clave'=>$clave);

          $token = AutentificadorJWT::CrearToken($datos);
          
          $retorno = array('datos'=>$datos, 'token'=>$token );
          
          $newResponse = $response->withJson($retorno, 200); 
        }
        else {

          $retorno = array('error'=> "No es usuario válido" );

          $newResponse = $response->withJson($retorno, 409); 
        }
  }
  else {
        $retorno = array('error'=>"Faltan los datos del usuario y clave!!!" );
        
        $newResponse = $response->withJson($retorno, 409); 
  }
 
	return $newResponse;
});


$app->get('/tomarToken[/]', function (Request $request, Response $response) {      
	
    $arrayConToken = $request->getHeader('miTokenUTNfra');
    $token = $arrayConToken[0];

    try {

      AutentificadorJWT::VerificarToken($token);
      
      $response->getBody()->write("PHP: Su token es " . $token);  
      
      $respuesta=usuario::Traertodos();    
      
      $newResponse = $response->withJson($respuesta); 
    } 
    catch (Exception $e) {
    
      $textoError = "ERROR -> " . $e->getMessage();
      
      $error = array('tipo' => 'acceso','descripcion' => $textoError);

      $newResponse = $response->withJson($error, 403); 
    }
    
    return $newResponse;
});


$app->run();