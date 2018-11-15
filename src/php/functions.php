<?php

    function limpiarDatos($datos) {
            
        $datos = trim($datos);
        //trim elimina espacios en blanco al principio y al final
        $datos = stripcslashes($datos);
        //stripslashes eliminas las barras / para limpiar el texto.
        $datos = htmlspecialchars($datos);
        //htmlspecialchars eliminar los caracteres especiales.
        $datos = html_entity_decode($datos, ENT_QUOTES | ENT_HTML401, "UTF-8");
        // html_entity_decode permite guardar caractes especiales en la base de datos.
        return $datos;
        }

?>