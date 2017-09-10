<!doctype html>
<html>
<head>
	<title>Ejemplos Pr&aacute;tico con AJAX</title>
        <link href="../img/utnLogo.png" rel="icon" type="image/png" />
		
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="../css/animacion.css">		
		
		<!-- Estilos propios -->
		<link rel="stylesheet" type="text/css" href="../css/estilo.css">

		<!-- Funciones Propias -->		
		<script type="text/javascript" src="manejadora.js">
		</script>
</head>
<body>
		<a href="../index.html"  class="btn btn-info">Volver al Inicio</a>
		<div class="container">
		<div class="page-header">
			<div class="CajaInicio animated bounceInRight">
				<h1>Ingrese su nombre</h1>
				<input type="text" id="txtNombre" style="width:100%;font-size:30px" onkeyup="Ajax.Suggestion(this.value)" />
			</div>
				  
			<div class="CajaInicio animated bounceInRight">
				<h1>NOMBRES SUGERIDOS</h1>
				<div id="divNombresSugeridos" style="font-size:50px"></div>
			</div>
			
		</div>
		
	</div>
</body>
</html>