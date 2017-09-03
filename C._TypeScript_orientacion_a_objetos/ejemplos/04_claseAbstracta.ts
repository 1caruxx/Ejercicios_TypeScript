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