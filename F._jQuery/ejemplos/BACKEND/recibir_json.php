<?php

    //SIMULO RETARDO EN LA RED
    sleep(3);

    var_dump($_POST);
	
//	$persona = json_decode($_POST["miPersona"]); //ERROR
	$persona = json_encode($_POST["miPersona"]); //ERROR, NO ES OBJETO 
	

//	$persona = json_decode(json_encode($_POST["miPersona"]));

//	var_dump($persona);
	
//	echo $persona;//ERROR, SI ES OBJETO.
	
//	echo $persona->edad . " - " . $persona->nombre . "<br/>";
