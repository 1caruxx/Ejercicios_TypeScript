//ARRAY.FILTER

//#1.- SE QUIERE OBTENER TODOS LOS IMPARES
let valores : number[] = [1, 2, 3, 4, 5];
let impares : number[] = [];

//a.- FORMA 'TRADICIONAL'
let cont:number = 0;
for (let i = 0; i < valores.length; i++) {
  if(valores[i] % 2 === 1) {
    impares[cont] = valores[i];
    cont++;
  }
}

console.log(impares);

//b.- CON FILTER
impares = valores.filter(function(numero){
    return numero % 2 === 1;
});

console.log(impares);

//c.- CON FILTER Y =>
impares = valores.filter(numero => numero % 2 === 1 );

console.log(impares);
