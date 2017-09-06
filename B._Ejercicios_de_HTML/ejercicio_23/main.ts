function Calcular() : void{

    var nombre : string = (<HTMLInputElement>document.getElementById("txtNombre")).value;
    var apellido : string = (<HTMLInputElement>document.getElementById("txtApellido")).value;
    var email : string = (<HTMLInputElement>document.getElementById("emlMail")).value;
    var salario : number = ObtenerCoeficiente();

    console.log(`Nombre: ${nombre}\nApellido: ${apellido}\nemail: ${email}\nSueldo mensual> ${salario}`);
    (<HTMLInputElement>document.getElementById("txtResultado")).value = salario.toString();
}

function ObtenerCoeficiente() : number{

    return (parseInt((<HTMLInputElement>document.getElementById("nmbHoras")).value)*4)*6.88;
}