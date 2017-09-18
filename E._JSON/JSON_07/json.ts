var xhttp : XMLHttpRequest = new XMLHttpRequest();

xhttp.open("GET" , "./traerAuto.php");
xhttp.send();

xhttp.onreadystatechange = () => {

    if(xhttp.readyState==4 && xhttp.status==200) {

        alert(xhttp.responseText);
        console.log(xhttp.responseText);
    }
}