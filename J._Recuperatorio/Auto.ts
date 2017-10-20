/// <reference path="./Vehiculo.ts"/>

namespace Entidades {

    export class Auto extends Vehiculo {

        public color : string;
        public foto : string;

        public constructor(marca:string , patente:string , precio:number , color:string , foto?:string) {

            super(marca , patente , precio);
            this.color = color;

            if(foto != "" && foto)
            {

                this.foto = foto;
            }
        }

        public ToJSON() {
            
            return `{"datos":${super.ToString()} , "estetica":{"foto":"${this.foto}" , "color":"${this.color}"}}`;
        }
    }
}