"use strict";
function Calcular() {
    var numero1 = parseInt(document.getElementById("nmbNumeroUno").value);
    var numero2 = parseInt(document.getElementById("nmbNumeroDos").value);
    var resultado = 0;
    var signo = "";
    for (var i = 0; i < document.getElementsByName("rdoOpcion").length; i++) {
        if (document.getElementsByName("rdoOpcion")[i].checked) {
            signo = document.getElementsByName("rdoOpcion")[i].value;
        }
    }
    switch (signo) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            if (numero2 == 0) {
                alert("No se puede dividir por 0.");
            }
            else {
                resultado = numero1 / numero2;
            }
            break;
    }
    console.log("El resultado de la operacion es: " + resultado);
    document.getElementById("nmbResultado").value = resultado.toString();
}
//# sourceMappingURL=main.js.map