"use strict";
/// <reference path="MOCK_DATA.ts" />
var users = datos.MOCK_DATA;
//console.log(users);
//#1.-Mostrar todos los datos de los usuarios por consola
function Ejercicio1() {
    console.clear();
    for (var i = 0; i < users.length; i++) {
        console.log("ID: " + users[i].id);
        console.log("Nombre: " + users[i].nombre);
        console.log("Apellido: " + users[i].apellido);
        console.log("eMail: " + users[i].email);
        console.log("Sexo: " + users[i].sexo);
        console.log("Trabajo: " + users[i].trabajo);
        console.log("Pais: " + users[i].pais);
        console.log("Ciudad: " + users[i].ciudad);
        console.log("Edad: " + users[i].edad);
    }
}
//#2.-Retornar todos los trabajos de los usuarios
function Ejercicio2() {
    console.clear();
    var trabajos = users.map(function (item) {
        return item.trabajo;
    });
    console.log(trabajos);
}
//#3.-Retornar todos los paises de los usuarios
function Ejercicio3() {
    console.clear();
    var paises = users.map(function (item) {
        return item.pais;
    });
    console.log(paises);
}
//#4.-Retornar un array de objetos de aquellos usuarios cuyo pais sea China
function Ejercicio4() {
    console.clear();
    var chinas = users.filter(function (item) {
        return item.pais == "China";
    });
    console.log(chinas);
}
//#5.-Retornar una array de objetos de todos los usuarios menores a 21 años
function Ejercicio5() {
    console.clear();
    var jovenes = users.filter(function (item) {
        return item.edad < 21;
    });
    console.log(jovenes);
}
function EjercicioExtra() {
    console.clear();
    var cantidadMasculinos = users.reduce(function (valor, item) {
        if (item.sexo == "Male") {
            return valor + 1;
        }
        else {
            return valor;
        }
    }, 0);
    console.log(cantidadMasculinos);
}
//#6.-Retornar la cantidad de usuarios con sexo masculino (Male)
function Ejercicio6() {
    console.clear();
    var cantidadMasculinos = users.filter(function (item) {
        return item.sexo == "Male";
    }).length;
    console.log(cantidadMasculinos);
}
//#7.-Retornar una array de strings (el nombre de los usarios de sexo femenino (Female))
function Ejercicio7() {
    console.clear();
    var nombresFemeninos = users
        .filter(function (item) {
        return item.sexo == "Female";
    })
        .map(function (item) {
        return item.nombre;
    });
    console.log(nombresFemeninos);
}
//#8.-Retornar una array de strings (el email de los usarios de sexo masculino (Male))
function Ejercicio8() {
    console.clear();
    var mailsMasculinos = users
        .filter(function (item) {
        return item.sexo == "Male";
    })
        .map(function (item) {
        return item.email;
    });
    console.log(mailsMasculinos);
}
//#9.-Retornar un array de objetos que solo contengan los nombres, apellidos y ciudades de todos los usuarios
function Ejercicio9() {
    console.clear();
    var datosUsers = users.map(function (item) {
        return { "nombre": item.nombre, "apellido": item.apellido, "ciudad": item.ciudad };
    });
    console.log(datosUsers);
}
//#10.-Retornar un array de objetos que solo contengan los nombres, apellidos y ciudades de todos los usuarios
// masculinos mayores de 35 años
function Ejercicio10() {
    console.clear();
    var datosUsersMayoresMasculinos = users
        .filter(function (item) {
        return item.edad > 35 && item.sexo == "Male";
    })
        .map(function (item) {
        return { "nombre": item.nombre, "apellido": item.apellido, "ciudad": item.ciudad, "sexo": item.sexo };
    });
    console.log(datosUsersMayoresMasculinos);
}
//#11.-Retornar el promedio de edad de los usuarios
function Ejercicio11() {
    console.clear();
    var promedioEdad = users.reduce(function (valor, item) {
        return (valor + item.edad);
    }, 0) / users.length;
    console.log(promedioEdad);
}
//#12.-Retornar el promedio de edad de los usuarios masculinos
function Ejercicio12() {
    console.clear();
    var contador = 0;
    var promedioEdadMasculinos = users
        .filter(function (item) {
        return item.sexo == "Male";
    })
        .reduce(function (valor, item) {
        contador++;
        return valor + item.edad;
    }, 0) / contador;
    console.log(promedioEdadMasculinos);
}
//#13.-Retornar el promedio de edad de los usuarios egipcios (Egypt)
function Ejercicio13() {
    console.clear();
    var contador = 0;
    var promedioEdadEgipcios = users
        .filter(function (item) {
        return item.pais == "Egypt";
    })
        .reduce(function (valor, item) {
        contador++;
        return valor + item.edad;
    }, 0) / contador;
    console.log(promedioEdadEgipcios);
}
//# sourceMappingURL=ejercicios.js.map