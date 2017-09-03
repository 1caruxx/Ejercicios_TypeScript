import {Persona} from "./Persona";

class Profesor extends Persona{

    private _horario : number;
    private _titulo : string;

    public constructor(nombre:string , apellido:string , horario:number , titulo:string){
        super(nombre , apellido);
        this._horario = horario;
        this._titulo = titulo;
    }

    public ToString() : string{
        
        return super.ToString() + "\nhorario: " + this._horario + "\n _titulo: " + this._titulo;
    }
}