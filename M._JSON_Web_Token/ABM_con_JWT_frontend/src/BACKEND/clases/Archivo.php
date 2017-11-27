<?php

    require_once "./src/BACKEND/clases/Usuario.php";
    require_once './src/BACKEND/clases/Validadora.php';
    require_once './vendor/autoload.php';
    use \Firebase\JWT\JWT;

    class Archivo {

        public static function ObtenerListado($response=null) {

            $retorno = array();

            if(!@ $archivo = fopen("./src/BACKEND/archivo/usuarios.txt" , "r")) {

                $response->getBody()->write("No se ha podido abrir el archivo.");
            }
            else {

                $usuario = array();
                $listaDeUsuarios = array();
                $contador = 0;

                while(!feof($archivo)) {

                    $usuario = explode(" - " , trim(fgets($archivo)));

                    if($usuario[0] != "") {

                        array_push($listaDeUsuarios , new Usuario($usuario[0] , $usuario[1] , $usuario[2] , $usuario[3]));
                    }
                }

                fclose($archivo);

                $retorno["usuarios"] = $listaDeUsuarios;
                $retorno["response"] = $response;

                return $retorno;
            }
        }

        public function LogearAusuario($request , $response , $next) {

            $usuario = $request->getParsedBody();
            $listado = Archivo::ObtenerListado($response);
            $listaDeUsuarios = $listado["usuarios"];
            $response = $listado["response"];
            $encontrado = false;

            foreach($listaDeUsuarios as $item) {

                if($usuario["correo"]==$item->GetCorreo() && $usuario["clave"]==$item->GetClave()) {

                    $encontrado = true;
                    break;
                }
            }

            if($encontrado) {

                $key = "12345";
                $token = array(
                    "correo" => $item->GetCorreo(),
                    "clave" => $item->GetClave(),
                    "perfil" => $item->GetPerfil()
                );

                $jwt = JWT::encode($token, $key);

                $response->getBody()->write($jwt);
                $response = $next($request , $response);
            }
            else {

                $response->getBody()->write("false");
            }

            return $response;
        }

        public function VerificarExistencia($request , $response , $next) {
      
            return Validadora::VerificarExistencia(Archivo::ObtenerListado($response) , $request , $response , $next);
        }

        public function VerificarQueNoExista($request , $response , $next) {

            return Validadora::VerificarQueNoExista(Archivo::ObtenerListado($response) , $request , $response , $next);
        }

        public function Listar($request , $response) {

            $listado = Archivo::ObtenerListado($response);
            $listaDeUsuarios = $listado["usuarios"];
            $response = $listado["response"];

            $stringAuxiliar = "<table border='1'>
                                   <tbody>
                                       <thead>
                                           <tr>
                                               <th>Perfil</th>
                                               <th>Correo</th>
                                               <th>Clave</th>
                                               <th>Foto</th>
                                           </tr>
                                       </thead>";

            foreach($listaDeUsuarios as $usuario) {

                $stringAuxiliar .= "<tr>
                                        <td>".$usuario->GetPerfil()."</td>
                                        <td>".$usuario->GetCorreo()."</td>
                                        <td>".$usuario->GetClave()."</td>
                                        <td><img src='../img/".trim($usuario->GetFoto())."' width='50px' height='50px'/></td>
                                    </tr>";
            }

            $stringAuxiliar .= "</tbody>
                            </table>";

            $response->getBody()->write($stringAuxiliar);

            return $response;
        }

        public static function Agregar($request , $response , $_AR) {

            if(!@ $archivo = fopen("./src/BACKEND/archivo/usuarios.txt" , "a")) {

                $response->getBody()->write("No se ha podido abrir el archivo.");
            }
            else {

                $usuario = $request->getParsedBody();
                $nombreFoto = date("Gis").".".pathinfo($_AR["foto"]["name"] , PATHINFO_EXTENSION);
                $rutaFoto = "./src/BACKEND/img/".$nombreFoto;

                fwrite($archivo , (new Usuario($usuario["correo"] , $usuario["clave"] , $usuario["perfil"] , $nombreFoto))->ToString());
                move_uploaded_file($_AR["foto"]["tmp_name"] , $rutaFoto);

                fclose($archivo);

                $response->getBody()->write("Se ha cargado correctamente el nuevo usuario.");
            }

            return $response;
        }

        public static function Eliminar($request , $response) {

            $usuario = $request->getParsedBody();
            $listado = Archivo::ObtenerListado($response);
            $listaDeUsuarios = $listado["usuarios"];
            $response = $listado["response"];
            $contador = 0;

            if(!@ $archivo = fopen("./src/BACKEND/archivo/usuarios.txt" , "w")) {

                $response->getBody()->write("No se ha podido abrir el archivo.");
            }
            else {

                foreach($listaDeUsuarios as $item) {

                    if($usuario["correo"] == $item->GetCorreo()) {

                        unlink("./src/BACKEND/img/".$item->GetFoto());
                        unset($listaDeUsuarios[$contador]);
                    }

                    if(isset($listaDeUsuarios[$contador])) {

                        fwrite($archivo , $item->ToString());
                    }

                    $contador++;
                }

                fclose($archivo);
                $response->getBody()->write("Se ha dado de baja correctamente.");
            }

            return $response;
        }

        public static function Modificar($request , $response , $_AR) {

            $usuario = $request->getParsedBody();
            $nombreFoto = date("Gis").".".pathinfo($_AR["foto"]["name"] , PATHINFO_EXTENSION);
            $rutaFoto = "./src/BACKEND/img/".$nombreFoto;
            $usuario = new Usuario($usuario["correo"] , $usuario["clave"] , $usuario["perfil"] , $nombreFoto);
            $listado = Archivo::ObtenerListado($response);
            $listaDeUsuarios = $listado["usuarios"];
            $response = $listado["response"];
            $contador = 0;

            if(!@ $archivo = fopen("./src/BACKEND/archivo/usuarios.txt" , "w")) {

                $response->getBody()->write("No se ha podido abrir el archivo.");
            }
            else {

                foreach($listaDeUsuarios as $item) {

                    if($usuario->GetCorreo() == $item->GetCorreo()) {

                        unlink("./src/BACKEND/img/".$item->GetFoto());
                        move_uploaded_file($_AR["foto"]["tmp_name"] , $rutaFoto);

                        $listaDeUsuarios[$contador] = $usuario;
                    }

                    fwrite($archivo , $listaDeUsuarios[$contador]->ToString());
                    
                    $contador++;
                }

                fclose($archivo);
                $response->getBody()->write("Se ha modificado correctamente.");
            }

            return $response;
        }
    }
?>