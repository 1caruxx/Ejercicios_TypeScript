<?php
	//SIMULO RETARDO EN LA RED
	sleep(3);

	$persona = new stdClass();
	$persona->nombre = "Juan";
	$persona->edad = 66;

	$objJson = json_encode($persona);

	echo $objJson;