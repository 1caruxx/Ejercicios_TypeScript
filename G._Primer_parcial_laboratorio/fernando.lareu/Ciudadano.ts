/// <reference path="./Persona.ts"/>

namespace Entidades {

    export class Ciudadano extends Persona {

        public dni : number;
        public pais : string;
        public foto : string;

        public constructor(nombre:string , apellido:string , edad:number , dni:number , pais:string , foto?:string) {

            super(nombre , apellido , edad);
            this.dni = dni;
            this.pais = pais;

            if(foto != "" && foto)
            {

                this.foto = foto;
            }
        }

        public ToJSON() {
            
            /*
             * Las claves del JSON siempre entrecomilladas.
             * Los valores tambien entrecomillados, incluso aunque se trate de una variable que contenga un string.
             * Si es un valor numerico, nunca va entrecomillado.
             */
            return `{"datosPersonales":${super.ToJSON()} , "datosCiviles":{"dni":${this.dni} , "foto":"${this.foto}" , "pais":"${this.pais}"}}`;
        }
    }
}