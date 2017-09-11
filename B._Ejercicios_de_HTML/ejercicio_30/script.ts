function Coordenadas(evento:MouseEvent) {

    var X : Text = document.createTextNode("X: " + evento.clientX);
    var Y : Text = document.createTextNode("Y: " + evento.clientY);
    (<HTMLDivElement>document.getElementById("divCoordenadas")).appendChild(X);
    (<HTMLDivElement>document.getElementById("divCoordenadas")).appendChild(Y);
   
}