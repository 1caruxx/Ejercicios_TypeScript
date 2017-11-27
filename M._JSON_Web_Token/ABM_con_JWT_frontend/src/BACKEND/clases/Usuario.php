<?php

    class Usuario {

        public $_correo;
        public $_clave;
        public $_perfil;
        public $_foto;

        public function GetCorreo() {

            return $this->_correo;
        }

        public function GetClave() {
            
            return $this->_clave;
        }

        public function GetPerfil() {

            return $this->_perfil;
        }

        public function GetFoto() {
            
            return $this->_foto;
        }

        public function __construct($correo , $clave , $perfil , $foto) {

            $this->_correo = $correo;
            $this->_clave = $clave;
            $this->_perfil = $perfil;
            $this->_foto = $foto;
        }

        public function ToString() {

            return $this->_correo." - ".$this->_clave." - ".$this->_perfil." - ".$this->_foto."\r\n";
        }
    }

?>