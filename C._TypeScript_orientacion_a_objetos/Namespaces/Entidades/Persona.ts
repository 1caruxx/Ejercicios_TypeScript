namespace Entidades{

    export abstract class Persona{
        
            protected _nombre : string;
            protected _apellido : string;
        
            protected constructor(nombre:string , apellido:string){
        
                this._nombre = nombre;
                this._apellido = apellido;
            }
        
            public  ToString() : string{
        
                return "Nombre: " + this._nombre +"\nApellido: " + this._apellido;
            }
        }
}

