function Funcion(numero, cadena) {
    if (cadena) {
        for (var i = 0; i < numero; i++) {
            console.log(cadena);
        }
    }
    else {
        console.log(1 / numero);
    }
}
Funcion(3, "Hola mundo!");
Funcion(3);
