function EsPalindromo(cadena) {
    var array = cadena.split(" ");
    var cadenaAux = "";
    var contador = 0;
    var retorno = false;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var item = array_1[_i];
        cadenaAux = cadenaAux.concat(item);
    }
    cadenaAux = cadenaAux.toLowerCase();
    for (var i = 0; i < cadenaAux.length; i++) {
        if (cadenaAux.charAt(i) == cadenaAux.charAt(cadenaAux.length - i - 1)) {
            contador++;
        }
        else {
            break;
        }
    }
    if (contador == cadenaAux.length) {
        retorno = true;
    }
    return retorno;
}
if (EsPalindromo("La ruta nos aporto otro paso natural")) {
    console.log("La frase es palindroma");
}
else {
    console.log("La frase no es palindroma");
}
if (EsPalindromo("hola")) {
    console.log("La frase es palindroma");
}
else {
    console.log("La frase no es palindroma");
}
