export class Auto{

    public color : string; 
    private _precio : number; 

    public GetPrecio():number{
        return this._precio;
    }

    public constructor(color:string, precio:number){
        this._precio = precio;
        this.color = color;
    }

    public static MetodoEstatico():void{
        console.log("Método esático");
    }
}