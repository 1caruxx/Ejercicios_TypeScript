<!doctype html>
<html>
<head>
	<title>Cargar Listados JSON</title>
	  
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
        <link href="../img/utnLogo.png" rel="icon" type="image/png" />

        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="../css/animacion.css">		
		
		<!-- Estilos propios -->
		<link rel="stylesheet" type="text/css" href="../css/estilo.css">

		<script type="text/javascript" src="./testJsonAjax.js"></script>
</head>
<body>
	<div class="container">
		<div class="page-header">
			<h1>Paises - Equipos de Fobal</h1>      
		</div>
		<div class="CajaInicio animated bounceInRight">
            <table>
                <tr>
                    <td>PAISES</td><td>EQUIPOS</td>
                </tr>
                <tr>
                    <td>
                        <select id="cboPais" onchange="ObtenerEquiposPorIdPais(this.value)">
                            <option value="0">SELECCIONE</option>
                            <optgroup label="SudAm&eacute;rica">
                                <option value="1">ARGENTINA</option>
                                <option value="2">BRASIL</option>
                                <option value="3">URUGUAY</option>
                            </optgroup>
                            <optgroup label="Europa">
                                <option value="4">ESPA&Ntilde;A</option>
                                <option value="5">ITALIA</option>
                                <option value="6">INGLATERRA</option>
                            </optgroup>
                        </select>
                    </td>
                    <td>
                        <select id="cboEquipo">
                            <option value="0">SELECCIONE</option>
                        </select>
                    </td>
                </tr>
            </table>
        </div>
		<div class="CajaInicio animated bounceInLeft">
            <a href="./index.html" class="list-group-item list-group-item list-group-item-info">Volver</a>
		</div>		
	</div>
</body>
</html>