function Agregar(texto:string) : void{

    var strings : Array<string> = texto.split(" ");
    var nodoTexto : Text;
    var options : Array<HTMLElement> = new Array<HTMLElement>();
    var select : HTMLElement = document.createElement("select");
    var br : HTMLElement = document.createElement("br");
    var i : number = 0;

    for(let item of strings){

        nodoTexto = document.createTextNode(item);
        //Es necesario crear un array de nodos ya que pisar el mismo nodo no creara uno nuevo sino que agregara el elemento al mismo.
        options[i] = document.createElement("option");
        options[i].appendChild(nodoTexto);
        select.appendChild(options[i]);
        i++;
    }

    (<HTMLInputElement>document.getElementById("div")).appendChild(select);
    (<HTMLInputElement>document.getElementById("div")).appendChild(br);
}