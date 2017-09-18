var producto = {"codigoBarra" : 123 , "nombre" : "Caramelo" , "precio" : 3.5};
var xhttp : XMLHttpRequest = new XMLHttpRequest();

xhttp.open("GET" , "./mostrarJson.php?json=" + JSON.stringify(producto));
xhttp.send();

xhttp.onreadystatechange = () => {

    if(xhttp.status == 200 && xhttp.readyState == 4)  {

        console.log(xhttp.responseText);
    }
}
