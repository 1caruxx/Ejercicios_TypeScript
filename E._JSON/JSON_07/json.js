"use strict";
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "./traerAuto.php");
xhttp.send();
xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        alert(xhttp.responseText);
        console.log(xhttp.responseText);
    }
};
//# sourceMappingURL=json.js.map