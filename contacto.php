<?php
    
    include 'src/php/functions.php';

    if ($_SERVER['REQUEST_METHOD'] == 'POST' ) {

        $name = limpiarDatos($_POST['name']);
        $email = limpiarDatos($_POST['email']);
        $message = limpiarDatos($_POST['message']);

        $email_para = "unknow-master@hotmail.com";
        $email_asunto = "Mensaje de: $email";
        $datosmensaje = "De: $name \r\nCorreo: $email \r\n\nMensaje: $message";
            
        mail($email_para, $email_asunto, $datosmensaje);        
    }
?>