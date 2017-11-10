/// <reference path="libs/jquery/index.d.ts" />

//DEFINO EL SERVIDOR
var servidor: string = "http://localhost:8080/ejercicios/jwt_2017/back-end/api/";


function CrearToken(): void {

    $.ajax({
        type: "post",
        url: servidor + "jwt/CrearToken"
    })
        .done(function (retorno) {

            console.info("OK ", retorno);

            //GUARDO EL TOKEN EN EL LOCALSTORAGE (testJWT)
            if (typeof (Storage) !== "undefined") {

                localStorage.setItem('testJWT', retorno);

            }
            else {
                console.log("Sorry! No se soporta el almacenamiento web local.");
            }

        })
        .fail(function (error) {
            console.info("ERROR!!!", error);
        });

}

function VerificarToken(): void {

    //VERIFICO QUE EL TOKEN ESTE ALMACENADO EN EL LOCALSTORAGE    
    if (localStorage.getItem('testJWT') === null) {
        console.info("No existe el token!!!", 404);
        return;
    }
    //console.log(localStorage.getItem('testJWT'));return;/*
    $.ajax({
        url: servidor + "jwt/VerificarToken",
        type: 'POST',
        data: {
            token: localStorage.getItem('testJWT')
        }
    })
        .done(function (retorno) {

            console.info("OK -->", retorno);

        })
        .fail(function (error) {
            console.info("ERROR!!!", error);
        });
}

function ObtenerPayLoad(): void {

    if (localStorage.getItem('testJWT') === null) {

        console.info("No existe el token!!!", 404);
        return;
    }

    $.ajax({
        url: servidor + "jwt/ObtenerPayLoad",
        type: 'POST',
        data: {
            token: localStorage.getItem('testJWT')
        }
    })
        .done(function (retorno) {

            console.info("OK -->", retorno);

        })
        .fail(function (error) {
            console.info("ERROR!!!", error);
        });
}

function ObtenerData(): void {
    if (localStorage.getItem('testJWT') === null) {

        console.info("No existe el token!!!", 404);
        return;
    }

    $.ajax({
        url: servidor + "jwt/ObtenerData",
        type: 'POST',
        data: {
            token: localStorage.getItem('testJWT')
        }
    })
        .done(function (retorno) {

            console.info("OK -->", retorno);

        })
        .fail(function (error) {
            console.info("ERROR!!!", error);
        });
    console.log("implementar....");
}

function IngresarJWT(): void {

    var usuario = $("#usuario").val();
    var clave = $("#clave").val();

    $.ajax({

        url: servidor + "ingreso/",
        type: 'POST',
        data: {
            usuario: usuario,
            clave: clave
        },
        dataType: "json" 
    })
        .done(function (retorno) {

            console.info("OK -->", retorno);
            console.log(retorno.datos);
            console.log(retorno.token);
            localStorage.setItem("miUtnFRA", retorno.token);

        })
        .fail(function (error) {
            console.info("ERROR!!!", error);
        });
}

function EnviarJWT() {

    if (localStorage.getItem('testJWT') === null) {

        console.info("No existe el token!!!", 404);
        return;
    }
    else {

        $.ajax({

            url: servidor + "tomarToken/",
            type: 'GET',
            headers: {

                miTokenUTNfra: localStorage.getItem("miUtnFRA")
            }
        })
            .done(function (retorno) {

                console.info("OK -->", retorno);
                //localStorage.setItem("miUtnFRA", retorno);
                alert(retorno);
                alert(retorno["datos"]);

            })
            .fail(function (error) {
                console.info("ERROR!!!", error);
            });
        }
}