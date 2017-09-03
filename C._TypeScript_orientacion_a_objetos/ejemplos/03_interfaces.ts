export interface IAutoBase{
    GetColor():string;
    SetColor(color:string):void;
}

export class Auto implements IAutoBase{

    public color : string;
    private _precio : number;

    public GetPrecio():number{
        return this._precio;
    }

    public constructor(color:string, precio:number){
        this._precio = precio;
        this.color = color;
    }

    public GetColor():string{
        return this.color;
    }

    public SetColor(color:string):void{
        this.color = color;
    }
}