var xhttp : XMLHttpRequest = new XMLHttpRequest();

xhttp.open("get" , "./recibirJson.php");
xhttp.send();

xhttp.onreadystatechange = () => {

    if(xhttp.readyState==4 && xhttp.status==200) {

        console.log(xhttp.responseText);
        alert(xhttp.responseText);
    }
}