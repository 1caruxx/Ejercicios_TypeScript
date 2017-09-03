function Click() {
    alert("desde funcion...");
}
var Manejadora = (function () {
    function Manejadora() {
    }
    Manejadora.Click = function () {
        alert("desde clase...");
    };
    return Manejadora;
}());
//# sourceMappingURL=main1.js.map