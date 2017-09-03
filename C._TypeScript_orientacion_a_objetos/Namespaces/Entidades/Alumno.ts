/// <reference path="Persona.ts" />

namespace Entidades{

    export class Alumno extends Persona {
        
            private _legajo : number;
            private _matriz : number;
            private _nota : number;
    
            public constructor(nombre:string , apellido:string , legajo:number , matriz:number , nota:number){
    
                super(nombre , apellido);
                this._legajo = legajo;
                this._matriz = matriz;
                this._nota = nota;
            }
    
            public ToString() : string{
    
                return super.ToString() + "\nLegajo: " + this._legajo + "\nMatriz: " + this._matriz + "Nota: " + this._nota;
            }
        }
}

