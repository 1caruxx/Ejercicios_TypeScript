//ARRAYS EN TYPESCRIPT
var vec = [1, true, "hola"];//por default es any

//var numeros : number[] = [1,2,true];
//var numeros : number = [1,2,3];
var numeros : number[] = [1,2,3];
var otrosNumeros : Array<number> = [1,2,3];
var eliminado : number = numeros.pop();
console.log(eliminado);

numeros.push(5);
console.log(numeros);

//ENUMS EN TYPESCRIPT
enum Ejemplo
{
    Basico,
    Intermedio,
    Avanzado
}

console.log(Ejemplo.Basico);

var e : Ejemplo = Ejemplo.Intermedio;
console.log(e);

//LET vs VAR
var foo : number = 123;
if(true) 
{ 
    var foo : number = 456; 
}
console.log(foo);

let foo2 : number = 123;
if(true) 
{ 
    let foo2 : number = 456; 
}
console.log(foo2);
