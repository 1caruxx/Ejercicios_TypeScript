<?php 
    $usuario = isset($_POST["usuario"]) ? $_POST["usuario"] : NULL;
    $pass = isset($_POST["password"]) ? $_POST["password"] : NULL;

    if($usuario === NULL || $pass === NULL){
        $clase = "alert alert-danger in";
        $mensaje = 'Error <i class="glyphicon glyphicon-thumbs-down"></i> No recibieron los datos!!!';
    }
    else{
        $clase = "alert alert-success in";
        $mensaje = 'Éxito <i class="glyphicon glyphicon-thumbs-up"></i> Se recibieron todos los datos correctamente!!!';
    }
    
?>
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link href="../img/utnLogo.png" rel="icon" type="image/png" />
        
        <!-- JQUERY -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        
        <!-- BOOTSTRAP -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        
        <!-- CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

        <title>Recepción</title>
    </head>
    <body>
        <div class="container">
            <br>
            <div class="<?php echo $clase;?>" role="alert" id="mensaje">
                <?php echo $mensaje;?>
            </div>
            <div class="alert alert-info">
                <?php
                    var_dump($_POST);
                ?>
            </div>
        </div>
    </body>
</html>