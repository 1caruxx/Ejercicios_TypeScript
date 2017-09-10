<?php

if(isset($_GET["valor"]))
{
	echo "valor recuperado por GET: ".$_GET["valor"];
}
else if(isset($_POST["valor"]))
{
	echo "valor recuperado por POST: ".$_POST["valor"];
}
else
{
	echo "hola mundo AJAX";
}


?>