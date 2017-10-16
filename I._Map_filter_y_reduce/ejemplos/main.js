"use strict";
var DATA = (function () {
    var d = [
        { "nombre": "Juana", "sexo": "F", "edad": 25 },
        { "nombre": "Roberto", "sexo": "M", "edad": 40 },
        { "nombre": "Julian", "sexo": "M", "edad": 35 }
    ];
    return d;
})();
var ejemplo = DATA;
for (var i = 0; i < ejemplo.length; i++)
    console.log(ejemplo[i].nombre + " - " + ejemplo[i].sexo + " - " + ejemplo[i].edad);
var soloNombre = ejemplo.map(function (m, i, ejemplo) {
    return m.nombre;
});
console.log(soloNombre);
var inicialJota = ejemplo.filter(function (usuario) {
    return usuario.nombre.substr(0, 1) === "J";
});
console.log(inicialJota);
var edadUsuarios = ejemplo.reduce(function (ant, sig) {
    return ant + sig.edad;
}, 0);
console.log(edadUsuarios);
var femaleUsers = function () {
    return DATA
        .filter(function (user) {
        return user.sexo === 'F';
    })
        .map(function (user) {
        return user.nombre;
    });
};
console.log(femaleUsers());
//# sourceMappingURL=main.js.map