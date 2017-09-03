/// <reference path="./01_vehiculo.ts" />

namespace Test{

    export class Auto extends Vehiculo{

        public color : string;
        private _precio : number;

        public GetPrecio():number{
            return this._precio;
        }

        public constructor(color:string, precio:number, marca:string){
            super(marca);
            this._precio = precio;
            this.color = color;
        }

        public Mostrar():string{
            return super.Mostrar() + this._precio + this.color;
        }

        public Acelerar():void{
            console.log("Acelerando...");
        }
    }

}