<!doctype html>
<html>
<head>
	<title>Visualizador de Fotos Subidas</title>
	  
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
        <link href="./img/utnLogo.png" rel="icon" type="image/png" />

		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="./css/animacion.css">		
		
		<!-- Estilos propios -->
		<link rel="stylesheet" type="text/css" href="./css/estilo.css">

		<!-- Libreria de jQuery -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		
		<!-- Funciones Propias -->
		<script type="text/javascript" src="main.js">
		</script>
</head>
<body>
	<div class="container">
		<div class="page-header">
			<h1>VISUALIZAR FOTOS SUBIDAS</h1>      
		</div>
		<div id="divFrm" class="animated bounceInLeft" style="height:200px;overflow:auto;margin-top:10px;border-style:none">
			<input type="file" id="archivo" onchange="SubirFoto()" /> 

		</div>
		<div id="divFoto"  class="animated bounceInLeft;" >
			<div style="width:35%;float:left;border-style:none"></div>
			<div style="width:65%;float:right;border-style:none">
					
				<img id="fotoTmp" src="./BACKEND/fotos/pordefecto.png" style="float:left" class="fotoform" />
			</div>
		</div>
	</div>
	<div style="width:35%;float:left;border-style:none"></div>
	<div style="width:65%;float:right;border-style:none">
		<br>
		<span id="lblFoto" style="font-size:150%" ></span>		
	</div>
	<div id="divGif" style="display:block;position:absolute" ><img id="imgGif" src="" /></div>
			
</body>
</html>