    
function Saludar():void {

    let nombre : string = (<HTMLInputElement> document.getElementById("txtNombre")).value;

    alert("Hola " + nombre);
}
