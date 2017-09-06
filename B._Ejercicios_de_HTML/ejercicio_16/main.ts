function mostrar() : void {

    var nombre : string = (<HTMLInputElement>document.getElementById("txtNombre")).value;
    var dni : string = (<HTMLInputElement>document.getElementById("nmbDNI")).value;
    var email : string = (<HTMLInputElement>document.getElementById("eMail")).value;
    var comentario : string = (<HTMLInputElement>document.getElementById("txtaComentario")).value;

    console.log("Su nombre: " + nombre + "\nSu DNI: " + dni + "\nSu email: " + email + "\nComentario: " + comentario);
}