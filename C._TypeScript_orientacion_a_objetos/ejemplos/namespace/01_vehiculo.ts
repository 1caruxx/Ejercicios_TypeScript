namespace Test{

    export abstract class Vehiculo{
        protected _marca:string;

        public constructor(marca:string){
            this._marca = marca;
        }

        public abstract Acelerar():void;

        public Mostrar():string{
            return this._marca;
        }
    }

}