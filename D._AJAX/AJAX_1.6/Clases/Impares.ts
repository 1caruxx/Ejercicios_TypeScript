/// <reference path="./ajax.ts"/>

namespace Test {

    export class Impares {

        public _numero : string;
        private _ajax : Test.Ajax;
        private _esNumero : boolean;

        public constructor(numero:string) {

            this._numero = numero;
            this._ajax = new Test.Ajax();
            this._esNumero = this.ValidarNumero(this._numero);
        }

        public CalcularImpares():any {

            if(this._esNumero) {

                this._ajax.Get("./admin.php" , this.Sucess , "txtValor="+this._numero , this.Error);
            }
            else {

                return "Valor ingresado no valido.";
            }
        }

        private Sucess() {

            //(<HTMLInputElement>document.getElementById("txtImpares")).value = (this._ajax.GetXHR()).responseText;
            //return (this._ajax.GetXHR()).responseText;
            return "llegue";
        }

        private Error() {

            return `Ups... algo salio mal. Status: ${this._ajax.GetXHR().status} ReadyState: ${(this._ajax.GetXHR()).readyState}`;
        }

        private ValidarNumero(numero:string):boolean {

            for(let i:number=0 ; i<numero.length ; i++) {
                
                if(isNaN(parseInt(numero.charAt(i)))) {
                
                    return false;
                }
            }

            return true;
        }
    }
}