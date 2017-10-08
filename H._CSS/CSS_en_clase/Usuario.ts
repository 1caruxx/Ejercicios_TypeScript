namespace Entidades {

    export class Usuario {

        public _nombre:string;
        public _apellido:string;
        public _mail:string;
        public _contrasenia:string;

        public constructor(nombre:string , apellido:string , mail:string , contrasenia:string) {

            this._nombre = nombre;
            this._apellido = apellido;
            this._mail = mail;
            this._contrasenia = contrasenia;
        }

        public ToJSON() {

            return JSON.stringify(this);
        }
    }
}