function mostrar() : void {
    var nombre : string = (<HTMLInputElement>document.getElementById("txtNombre")).value;

    alert("Su nombre" + nombre);
}