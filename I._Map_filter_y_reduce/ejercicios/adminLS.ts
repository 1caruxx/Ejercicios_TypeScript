/// <reference path="MOCK_DATA.ts" />

var users = datos.MOCK_DATA;

/*var stringJSON : string = '[';

    for(let item of users) {

        stringJSON += JSON.stringify(item)+",";
    }
    
stringJSON += ']';*/

$(document).ready(function() {

    /*
     * Es importante verificar que el localStorage este o no cargado para no pisar datos,
        * por que si yo agrego un usuario al localStorage por no a datos.MOCK_DATA, este desaparecera por que seteo el
        * localStorage cada vez que se carga la pagina.
     * Para verificarlo, tengo que preguntar si el localStorage es igual a null. Si lo es, lo seteo, sino, doy pie a los eventos.
     */
    if(localStorage.getItem("usuarios") == null) {

        alert("hola");
        localStorage.setItem("usuarios" , JSON.stringify(users));
    }
    
    $("#btnVerificar").click(function() {

        if(VerificarExistencia()) {

            alert("El usuario ya existe.");
        }
        else {

            alert("El usuario no existe.");
        }

    });

    $("#btnListar").click(function() {

        let arrayDeUsuarios = TraerUsuarios();

        for(let item of arrayDeUsuarios) {

            console.log(`ID: ${item.id}\n
            Nombre: ${item.nombre}\n
            Apellido: ${item.apellido}\n
            eMail: ${item.email}\n
            sexo: ${item.sexo}\n
            trabajo: ${item.trabajo}\n,
            pais: ${item.pais}\n
            ciudad: ${item.pais}\n
            Edad: ${item.edad}\n\n`);
        }
    });

    $("#btnCargar").click(function() {
        
        if(VerificarExistencia()) {

            alert("No se pudo cargar por que el usuario ya existe.");
        }
         else {

            let arrayDeUsuarios = TraerUsuarios();
            let objJSON : string = `{"id":${$("#txtId").val()},
            "nombre":\"${$("#txtNombre").val()}\",
            "apellido":\"${$("#txtApellido").val()}\",
            "email":\"${$("#emlMail").val()}\",
            "sexo":\"${$("#txtSexo").val()}\",
            "trabajo":\"${$("#txtTrabajo").val()}\",
            "pais":\"${$("#txtPais").val()}\",
            "ciudad":\"${$("#txtCiudad").val()}\",
            "edad":${$("#txtEdad").val()}}`;

            arrayDeUsuarios.push(JSON.parse(objJSON));
            datos.MOCK_DATA = arrayDeUsuarios;

            localStorage.setItem("usuarios" , JSON.stringify(arrayDeUsuarios));
            
            alert("Se ha dado de alta exitosamente.");
        }
    });
});

function TraerUsuarios() {

    return JSON.parse(<any>localStorage.getItem("usuarios"));
}

function VerificarExistencia() : boolean {

    let arrayDeUsuarios = TraerUsuarios();
    let mail : any = $("#emlMail").val();
    let existe : boolean = false;

    for(let item of arrayDeUsuarios) {

        if(item.email == mail)  {

            existe = true;
        }
    }

    return existe;
}
