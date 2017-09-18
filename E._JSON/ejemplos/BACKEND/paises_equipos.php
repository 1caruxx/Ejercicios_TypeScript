<?php

$idPais = isset($_POST["idPais"]) ? $_POST["idPais"] : NULL;

//LEO EL ARCHIVO Y LO RETORNO (ES UN ARRAY DE JSON)
$a = fopen("./archivos/paises_equipos.json","r");

$linea = '';
while(!feof($a)){

    $linea .= fgets($a);
}

fclose($a);

//DECODEO A JSON, EL ARRAY LEIDO (GENERANDO UN ARRAY DE OBJETOS PHP)
$equipos = json_decode($linea);
$equiposFiltrados = array();

//RECORRO LOS OBJETOS Y LOS AGREGO A UN ARRAY SOLO SI COINCIDE CON EL CRITERIO ELEGIDO
foreach($equipos as $eq){
    
    if($eq->idPais == $idPais)
    {
        $e = new stdclass();
        $e->id = $eq->idEquipo; 
        $e->nombre = $eq->nombre;

        array_push($equiposFiltrados, $e);
    }

}

//VUELVO A ENCODEAR A JSON, Y LO RETORNO
if(count($equiposFiltrados) > 0)
    $equiposPorPais = json_encode($equiposFiltrados);
else
    $equiposPorPais = "{}";
    
echo $equiposPorPais;