<?php
require_once '../composer/vendor/autoload.php';
use Firebase\JWT\JWT;

class AutentificadorJWT {

    private static $claveSecreta = 'ClaveSuperSecreta@';
    private static $tipoEncriptacion = ['HS256'];
    private static $aud = NULL;
    
    public static function CrearToken($datos) {

        $ahora = time();
        //'exp' => $ahora + (20),
        //PARAMETROS DEL PAYLOAD -- https://tools.ietf.org/html/rfc7519#section-4.1 --
        //SE PUEDEN AGREGAR LOS PROPIOS, EJ. 'app'=> "API REST 2017"       
        $payload = array(
        	'iat'=>$ahora,              //CUANDO SE CREO EL JWT (OPCIONAL)
                 //INDICA EL TIEMPO DE VENCIMIENTO DEL JWT (OPCIONAL)
            'aud' => self::Aud(),       //IDENTIFICA DESTINATARIOS (OPCIONAL)
            'data' => $datos,           //DATOS DEL JWT
            'app'=> "API REST 2017"     //INFO DE LA APLICACION (PROPIO)
        );
     
        //CODIFICO A JWT
        return JWT::encode($payload, self::$claveSecreta);
    }
    
    public static function VerificarToken($token) {
       
        if(empty($token) || $token === "") {

            throw new Exception("El token esta vacío!!!");
        } 

        try {
            //DECODIFICO EL TOKEN RECIBIDO            
            $decodificado = JWT::decode(
                                            $token,
                                            self::$claveSecreta,
                                            self::$tipoEncriptacion
                                        );
        } 
        catch (Exception $e) {
           
           throw new Exception("Token no válido!!! --> ".$e->getMessage());
        }
        
        //VERIFICO LOS DATOS DE 'AUD' PARA SABER DE QUE LUGAR VINO EL TOKEN
        if($decodificado->aud !== self::Aud()) {

            throw new Exception("No es un usuario válido!!!");
        }
    }
       
    public static function ObtenerPayLoad($token) {

        return JWT::decode(
                            $token,
                            self::$claveSecreta,
                            self::$tipoEncriptacion
                          );
    }

    public static function ObtenerData($token) {

        return JWT::decode(
                            $token,
                            self::$claveSecreta,
                            self::$tipoEncriptacion
                          )->data;
    }

    private static function Aud() {

        $aud = '';
        
        if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
            $aud = $_SERVER['HTTP_CLIENT_IP'];
        } 
        elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $aud = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } 
        else {
            $aud = $_SERVER['REMOTE_ADDR'];
        }
        
        $aud .= @$_SERVER['HTTP_USER_AGENT'];
        $aud .= gethostname();

        return sha1($aud);
    }
}