namespace Entidades {

    export abstract class Vehiculo {

        public marca  : string;
        public patente : string;
        public precio : number;

        public constructor(marca:string , patente:string , precio:number) {

            this.marca = marca;
            this.patente = patente;
            this.precio = precio;
        }

        public ToString() {

            return JSON.stringify(this); /*`{"marca":"${this.marca}" , "patente":"${this.patente}" , "precio":${this.precio}}`*/
        }
    }
}