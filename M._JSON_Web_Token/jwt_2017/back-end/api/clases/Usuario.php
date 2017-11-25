<?php
class Usuario
{
	 public static function EsValido($usuario, $clave) {
      
       if(Usuario::VerificarExistencia($usuario , $clave))
         return TRUE;
       else
          return FALSE;      
	}
	
    public static function TraerTodos() {
      
	    $uno = new stdClass();
	    $uno->nombre = "Jose";
	    $uno->apellido = "Perez";
		
		$dos = new stdClass();
	    $dos->nombre = "Maria";
		$dos->apellido = "Sosa";
		
	    $tres = new stdClass();
	    $tres->nombre = "Pablo";
		$tres->apellido = "Gutierrez";
		
		$retorno = array($uno, $dos, $tres);
		
     	return $retorno;     
	}

	public static function VerificarExistencia($usuario , $clave) {
		
		$datos = "mysql:host=localhost;dbname=prueba";
		$user = "root";
		$pass = "";
		
		try {
		
			$conexcion = new PDO($datos , $user , $pass);
			$resultado = $conexcion->prepare("SELECT * FROM `usuarios` WHERE `usuario`='{$usuario}' and `clave`='{$clave}'");
			$resultado->execute();

			if($fila = $resultado->fetch(PDO::FETCH_ASSOC)) {

				return true;
			}
			else {

				return false;
			}
		}
		catch(Exception $exception) {
		
			$response->getBody()->write("Se ha atrapado una excepcion: ".$excepcion->getMessage());
		}
		
		$retorno["usuarios"] = $usuarios;
		$retorno["response"] = $response;
		
		return $retorno;
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
}