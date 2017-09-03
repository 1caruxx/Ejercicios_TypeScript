function CalcularFactorial(numero) {
    var retorno = 0;
    if (numero == 0) {
        retorno = 1;
    }
    else {
        retorno = numero;
        for (var i = numero - 1; i > 0; i--) {
            retorno *= i;
        }
    }
    return retorno;
}
console.log(CalcularFactorial(5));
