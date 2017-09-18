var xhttp : XMLHttpRequest = new XMLHttpRequest();
var producto = [
    {"codigoBarra" : 123 , "nombre" : "Caramelo" , "precio" : 3.5} ,
    {"codigoBarra" : 456 , "nombre" : "Chocolate" , "precio" : 7.0} ,
    {"codigoBarra" : 789 , "nombre" : "Galletita" , "precio" : 2.3}];

xhttp.open("GET" , "./mostrarColeccionJson.php?json=" + JSON.stringify(producto));
xhttp.send();

xhttp.onreadystatechange = () => {

    if(xhttp.status == 200 && xhttp.readyState == 4) {

        console.log(xhttp.responseText);
    }
}

