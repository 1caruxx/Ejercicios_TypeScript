import {Persona} from "./Persona";

export class Aula {

    private _piso : number;
    private _numero : number;
    private _listado : Array<Persona>;

    public constructor(piso:number , numero:number){
        this._piso = piso;
        this._numero = numero;
        this._listado = new Array<Persona>();
    }

    public ToString(){

       
        var retorno : string = "Piso: " + this._piso + "\nNumero de aula: " + this._numero + "\nIntegrantes" + "\n\n=============";
     
        
        for(let Persona of this._listado)
            {
                retorno += Aula.MostrarListado(Persona);
            }
        //return "Piso: " + this._piso + "\nNumero de aula: " + this._numero + "\nIntegrantes" + "\n\n=============" + this._listado.forEach(Aula.MostrarListado);

        return retorno;
    } 


    private static MostrarListado(objeto:Persona) : string{

        return objeto.ToString();
    }

    public Agregar(persona:Persona){

        this._listado.push(persona);
    }
}