//ARRAY.REDUCE

//#1.- SE QUIERE OBTENER LA SUMA DE TODOS LOS NUEMEROS
let nums : number[] = [1, 2, 3, 4, 5];
let total : number = 0;

//a.- FORMA 'TRADICIONAL'
for (let i = 0; i < nums.length; i++) {
    total += nums[i];
}

console.log(total);

//b.- CON REDUCE
total = nums.reduce(function(ant, sig){
    return ant + sig;
}, 0);

console.log(total);

//c.- CON REDUCE Y =>
total = nums.reduce((ant, sig) => ant + sig , 0);

console.log(total);
