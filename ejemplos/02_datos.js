//ARRAYS EN TYPESCRIPT
var vec = [1, true, "hola"]; //por default es any
//var numeros : number[] = [1,2,true];
//var numeros : number = [1,2,3];
var numeros = [1, 2, 3];
var otrosNumeros = [1, 2, 3];
var eliminado = numeros.pop();
console.log(eliminado);
numeros.push(5);
console.log(numeros);
//ENUMS EN TYPESCRIPT
var Ejemplo;
(function (Ejemplo) {
    Ejemplo[Ejemplo["Basico"] = 0] = "Basico";
    Ejemplo[Ejemplo["Intermedio"] = 1] = "Intermedio";
    Ejemplo[Ejemplo["Avanzado"] = 2] = "Avanzado";
})(Ejemplo || (Ejemplo = {}));
console.log(Ejemplo.Basico);
var e = Ejemplo.Intermedio;
console.log(e);
//LET vs VAR
var foo = 123;
if (true) {
    var foo = 456;
}
console.log(foo);
var foo2 = 123;
if (true) {
    var foo2_1 = 456;
}
console.log(foo2);
