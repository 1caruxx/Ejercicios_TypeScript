<?php

$palabra = isset($_POST["palabra"]) ? $_POST["palabra"] : NULL;

$nombres = "";
$a = fopen("nombres.txt","r");

while(!feof($a)){
	$nombre = fgets($a); 
	if(strncmp($nombre, $palabra, strlen($palabra)) == 0)
		$nombres .=  $nombre . "<br/>";
}
fclose($a);

echo $nombres;

?>