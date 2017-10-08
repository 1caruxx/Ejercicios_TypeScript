/// <reference path="./Persona.ts"/>

namespace Entidades {

    export class Ciudadano extends Entidades.Persona {

        public dni : number;
        public pais : string;
        public foto : string;

        public constructor(nombre:string , apellido:string , edad:number , dni:number , pais:string , foto?:string) {

            super(nombre , apellido , edad);
            this.dni = dni;
            this.pais = pais;

            if(foto && foto!="") {

                this.foto = foto;
            }
        }

        public ToString() : string {

            return `{"datosPersonales" : ${super.ToString()} , "datosCiviles" : {"dni" : ${this.dni}} , "pais" : ${this.pais} , "foto" : ${this.foto}}}`;
        }
    }
}