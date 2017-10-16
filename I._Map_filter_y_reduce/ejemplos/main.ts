let DATA = (function() {

    let d : any[] = [
        {"nombre" : "Juana", "sexo" : "F", "edad" : 25},
        {"nombre" : "Roberto", "sexo" : "M", "edad" : 40},
        {"nombre" : "Julian", "sexo" : "M", "edad" : 35}
    ];

    return d;
})();

let ejemplo = DATA;

for(let i=0; i<ejemplo.length; i++)
    console.log(ejemplo[i].nombre + " - " + ejemplo[i].sexo + " - " + ejemplo[i].edad);


let soloNombre = ejemplo.map(function(m, i, ejemplo){
    return m.nombre;
});
console.log(soloNombre);


let inicialJota = ejemplo.filter(function(usuario){
    return usuario.nombre.substr(0,1) === "J";
});
console.log(inicialJota);


let edadUsuarios = ejemplo.reduce(function(ant, sig){
    return ant + sig.edad;
},0);
console.log(edadUsuarios);


let femaleUsers = function () {
    return DATA
      .filter(function (user) {
        return user.sexo === 'F';
      })
      .map(function (user) {
        return user.nombre;
      });
  };
console.log(femaleUsers());