<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <noscript><h2>necesita Javascript para ver esta página correctamente.</h2></noscript>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="dist/css/home.css">    
    <script src="src/js/jquery-3.3.1.min.js"></script>
    <script src="src/js/transition.js"></script>
    <script src="src/js/functions.js"></script>
    <script src="src/js/home.js"></script>
    <title>As-wm</title>
</head>
<body>
    <div id="spinner">
        <div class="loader">Loading...</div>
    </div>
    <div class="old">
        <a href="http://www.as-wm.com/old/blog">Blog</a>
    </div>
    
    <nav id="nav" class="nav">
        <ul id="ul" class=""> 
            <li><a href="#" id="btn-about">Sobre mi</a></li>            
            <li><a href="#" id="btn-briefcase">Portafolio</a></li>            
            <li><a href="#" id="btn-contact">Contacto</a></li>            
        </ul>        
    </nav>
    <main id="main" class="main whole-space">
        <div id="arrow-box" class="arrow-box">
            <div id="left-arrow" class="arrow"></div>
        </div>
        <div id="wlc" class="welcome">
             <p id="wlc-text" class="wlc-text" >Bienvenido, </br> elige una opción</p></div>
        <footer id="foo" class="foo">
            <div class="social-networks">
                <div class="caja-img"><a target="_blank" href="https://github.com/allberttosanchez"><img class="github" src="images/github.png" alt="github"></a></div>
                <div class="caja-img"><a target="_blank" href="https://www.facebook.com/allberttosanchez"><img class="facebook" src="images/fb.png" alt="facebook"></a></div>
                <div class="caja-img"><a target="_blank" href="https://twitter.com/allberttsanchez"><img class="twitter" src="images/twitter.png" alt="twitter"></a></div>
                <div class="caja-img"><a target="_blank" href="https://www.youtube.com/channel/UC02Tr4KX4JmC6WPxi5xHcSA?view_as=subscriber"><img class="youtube" src="images/youtube.png" alt="youtube"></a></div>
            </div>
        </footer>
    </main>
    <div id="side-bar" class="side-bar trasladed">
        <div id="profile-box" class="profile-box hidden">
            <div id="img-profile" class="img">
                <img src="images/me.jpg"></div>
            <div id="about-title" class="about-title">
                <h1>Alberto Sánchez</h1>
            </div>
            <div id="paragraph-profile" class="paragraph">
                <p>Estudiante permanente de Ciencias de Computación. He realizado cursos con HTML, CSS, postCSS, Bootstrap, Font-Awesome, JS, Ajax, PHP, MySQL, Vue.js, Prototipado, Git y Github, y sigo... tambien tengo amplia experiencia en Photophosp, Corel-Draw, Gravit Designer.</p>
            </div>
        </div>        
        <div id="briefcase-box" class="briefcase-box show hidden">
            <a href="#"><div id="left-card" class="arrow"><p><</p></div></a>
            <div class="card-wrap">                     
                <div id="back-card" class="back-card"></div>
                <div id="front-card" class="front-card">
                    <div id="card-header" class="card-header">
                        <h3>Old As-Webmaster Page</h3>
                    </div>
                    <div class="card-img">
                        <a href="http://www.as-wm.com/old" target="_blank"><img src="images/proyecto1.jpg" alt=""></a>                    
                    </div>
                    <div id="card-code-pic" class="card-code-pic">
                        <img src="images/html5_logo.png" alt="html5">
                        <img src="images/css3_logo.png" alt="css3">
                        <img src="images/js_logo.png" alt="javascript">
                        <img src="images/php7_logo.png" alt="php7">
                    </div>
                    <div id="card-description" class="card-description">
                        <p>Primer website, creado principalmente con php.</p>
                    </div>
                    <div id="card-foo">
                        <h2>As-Webmaster@2017</h2>
                    </div>                
                </div>                     
            </div>
            <a href="#"><div id="right-card" class="arrow"><p>></p></div></a>
        </div>
        <div id="contact-box" class="contact-box hidden">
            <form onsubmit="validarSubmit(); return false;" id="contact-form" action="" method="post" class="contact-form">
                <input id="name" name="name" type="text" placeholder="Nombre Completo" requiered="">
                <input id="email" name="email" type="email" placeholder="Correo Electronico" requiered="">
                <textarea name="contact-textarea" placeholder="Escriba su mensaje aqui." requiered="" id="contact-textarea"></textarea>
                <input id="submit" type="submit" value="Contactar">
            </form>
            <div id="msg-box" class="msg-box">
                <p id="status-msg" class="status-msg hidden"></p>
            </div>            
        </div>
    </div>  
</body>
</html>