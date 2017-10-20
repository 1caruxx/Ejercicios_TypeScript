namespace Entidades {

    export class Persona {

        public nombre  :string;
        public apellido : string;
        public edad : number;

        public constructor(nombre:string , apellido:string , edad:number) {

            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
        }

        public ToJSON() {

            /*
             * El equivalente seria return `{"nombre":"${this.nombre}" , "apellido":"${this.apellido}" , "edad":${this.edad}}`
             * No puede haber llaves que no correspondan.
             */
            return JSON.stringify(this);
        }
    }
}