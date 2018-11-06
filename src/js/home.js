window.onload = function(){
    /* VARIABLES */
    var clicked = 0;
    var content = 0;

    (function(){

        showSideBar = function() {
            /* Add class show to side-bar */
            var showBar =document.getElementById("side-bar");
            showBar.removeAttribute("class");
            var att = document.createAttribute("class");
            att.value = "side-bar show";
            showBar.setAttributeNode(att); 
        } 

        hiddenSideBar = function(){
            var showBar =document.getElementById("side-bar");
            showBar.removeAttribute("class");
            var att = document.createAttribute("class");
            att.value = "side-bar hidden";
            showBar.setAttributeNode(att);
        }
        
        boxCleaner = function(){
            if(clicked==0){
                if (content==1) {aboutBar();} 
                    else if (content==2){briefcaseBar();}
                         else if (content==3) {contactBar();}
                } else if (clicked==1) {
                    var showBar = document.getElementById("side-bar");
                    var showBarImgProfile = document.getElementById('img-profile');
                    var showBarAboutTitle = document.getElementById('about-title');
                    var showBarParagraphProfile = document.getElementById('paragraph-profile');
                        /* DESTROY ACCION */
                        showBar.removeChild(showBarImgProfile);
                        showBar.removeChild(showBarAboutTitle);
                        showBar.removeChild(showBarParagraphProfile);
                    clicked = 0;
                    boxCleaner();
                } else if (clicked==2) {

                    clicked = 0;
                    boxCleaner();
                } else if (clicked==3) {
                    var sideBar = document.getElementById("side-bar");
                        var contactBox = document.getElementById("contact-box");
                            var divForm = document.getElementById('contact-form');
                                var input1 = document.getElementsByTagName('input')[0];
                                var input2 = document.getElementsByTagName('input')[1];
                                var textArea = document.getElementById('contact-textarea');
                                var submit = document.getElementById('submit');
                        var msgBox = document.getElementById('msg-box');
                            var pElement = document.getElementById('contact-error-msg');
                            var pElement1 = document.getElementById('contact-send-msg');
                            var pElement2 = document.getElementById('contact-warning-msg');
                       /* DESTROY ACCION */
                            msgBox.removeChild(pElement2);
                            msgBox.removeChild(pElement1);
                            msgBox.removeChild(pElement);
                        sideBar.removeChild(msgBox);
                                divForm.removeChild(submit);
                                divForm.removeChild(textArea);
                                divForm.removeChild(input2);
                                divForm.removeChild(input1);
                            contactBox.removeChild(divForm);
                        sideBar.removeChild(contactBox);
                    clicked = 0;
                    boxCleaner();      
            }
        }

        aboutBar = function(){
            
            if(clicked == 0) {
                /* Div Element Created on side-bar */
                var divSideBar = document.createElement('div');
                var id = document.createAttribute('Id');
                    id.value = "img-profile";
                    divSideBar.setAttributeNode(id);
                var DivClass = document.createAttribute('class');
                    DivClass.value = "img";
                    divSideBar.setAttributeNode(DivClass);
                var sideBar = document.getElementById('side-bar');
                    sideBar.appendChild(divSideBar);
        
                        /* Div Element Created on img-profile */
                        var divSideBar = document.createElement('img');
                        var src = document.createAttribute('src');
                            src.value = "images/me.jpg";
                            divSideBar.setAttributeNode(src);
                        var imgProfile = document.getElementById('img-profile');
                            imgProfile.appendChild(divSideBar);
        
                /* Div Element Created on side-bar */
                var divSideBar = document.createElement('div');
                var id =  document.createAttribute('Id');
                    id.value = "about-title";
                    divSideBar.setAttributeNode(id);
                var DivClass =  document.createAttribute('class');
                    DivClass.value = "about-title";
                    divSideBar.setAttributeNode(DivClass);
                var sideBar = document.getElementById('side-bar');
                    sideBar.appendChild(divSideBar);
        
                        /* H1 Element Created on about-title */
                        var hOne = document.createElement('h1');
                            hOne.innerText = "As-Webmaster";
                        var aboutTitle = document.getElementById('about-title');
                            aboutTitle.appendChild(hOne);
        
                /* Div Element Created on side-bar */
                var divSideBar = document.createElement('div');
                var id =  document.createAttribute('Id');
                    id.value = "paragraph-profile";
                    divSideBar.setAttributeNode(id);
                var DivClass =  document.createAttribute('class');
                    DivClass.value = "paragraph";
                    divSideBar.setAttributeNode(DivClass);
                var sideBar = document.getElementById('side-bar');
                    sideBar.appendChild(divSideBar);
        
                        /* p Element Created on about-title */
                        var pElement = document.createElement('p');
                            pElement.innerText = "Estudiante permanente de Ciencias de Computación. He realizado cursos con HTML, CSS, postCSS, Bootstrap, Font-Awesome, JS, Ajax, PHP, MySQL, Vue.js, Prototipado, Git y Github, y sigo... tambien tengo amplia experiencia en Photophosp, Corel-Draw, Gravit Designer.";
                        var paragrapgProfile = document.getElementById('paragraph-profile');
                            paragrapgProfile.appendChild(pElement);
                clicked = 1;
                showSideBar();
            } else {
                boxCleaner();
            }
        }  

        briefcaseBar = function(){
                        
            if(clicked==0) { 
                
                 
                hiddenSideBar();
                clicked = 2;
                showSideBar();
            } else {
                boxCleaner();
            }
        }


        contactBar = function(){
            
            if(clicked==0) {
                /* Div Contact-box Element Created on side-bar */
                var divContactBox = document.createElement('div');
                var att = document.createAttribute('Id');
                    att.value = "contact-box";
                    divContactBox.setAttributeNode(att);
                var att = document.createAttribute('class');
                    att.value = "contact-box";
                    divContactBox.setAttributeNode(att);
                var sideBar = document.getElementById('side-bar');
                    sideBar.appendChild(divContactBox);
                
                    /* Form Element Created on contact-box */
                    var divForm = document.createElement('form');
                    var att = document.createAttribute('Id');
                        att.value = "contact-form";
                        divForm.setAttributeNode(att);
                    var att = document.createAttribute('action');
                        att.value = "";
                        divForm.setAttributeNode(att);
                    var att = document.createAttribute('method');
                        att.value = "get";
                        divForm.setAttributeNode(att);
                    var att = document.createAttribute('class');
                        att.value = "contact-form";
                        divForm.setAttributeNode(att);
                    var contactBox = document.getElementById('contact-box');
                        contactBox.appendChild(divForm);

                        /* INPUT Element Created on contact-box */
                        var input = document.createElement('input');
                        var att = document.createAttribute('name');
                            att.value = "name";
                            input.setAttributeNode(att);
                        var att = document.createAttribute('type');
                            att.value = "text";
                            input.setAttributeNode(att);
                        var att = document.createAttribute('placeholder');
                            att.value = "Nombre Completo";
                            input.setAttributeNode(att);
                        var att = document.createAttribute('requiered');
                            input.setAttributeNode(att);
                        /*var DivClass = document.createAttribute('class');
                            DivClass.value = "img";
                            divSideBar.setAttributeNode(DivClass);*/
                        /*var divForm = document.getElementById('form');*/
                            divForm.appendChild(input);
                        
                        /* INPUT Element Created on contact-box */
                        var input = document.createElement('input');
                        var att = document.createAttribute('name');
                            att.value = "email";
                            input.setAttributeNode(att);
                        var att = document.createAttribute('type');
                            att.value = "email";
                            input.setAttributeNode(att);
                        var att = document.createAttribute('placeholder');
                            att.value = "Correo Electronico";
                            input.setAttributeNode(att);
                        var att = document.createAttribute('requiered');
                            input.setAttributeNode(att);
                        /*var DivClass = document.createAttribute('class');
                            DivClass.value = "img";
                            divSideBar.setAttributeNode(DivClass);*/
                        /*var divForm = document.getElementById('form');*/
                            divForm.appendChild(input);

                        /* TEXTAREA Element Created on contact-box */
                        var textArea = document.createElement('textarea');
                        var att = document.createAttribute('name');
                            att.value = "contact-textarea";
                            textArea.setAttributeNode(att);
                        var att = document.createAttribute('placeholder');
                            att.value = "Escriba su mensaje aqui.";
                            textArea.setAttributeNode(att);
                        var att = document.createAttribute('requiered');
                            textArea.setAttributeNode(att);
                        var att = document.createAttribute('id');
                            att.value = "contact-textarea";
                            textArea.setAttributeNode(att);
                        /*var divForm = document.getElementById('form');*/
                            divForm.appendChild(textArea);
                        
                        /* INPUT Element Created on contact-box */
                        var input = document.createElement('input');
                        var att = document.createAttribute('Id');
                            att.value = "submit";
                            input.setAttributeNode(att);
                        var att = document.createAttribute('type');
                            att.value = "submit";
                            input.setAttributeNode(att);
                        var att = document.createAttribute('value');
                            att.value = "Contactar";
                            input.setAttributeNode(att);
                        /*var DivClass = document.createAttribute('class');
                            DivClass.value = "img";
                            divSideBar.setAttributeNode(DivClass);*/
                        /*var divForm = document.getElementById('form');*/
                            divForm.appendChild(input);
                
                /* Div Message-box Element Created on side-bar */
                var divMsgBox = document.createElement('div');
                var att = document.createAttribute('Id');
                    att.value = "msg-box";
                    divMsgBox.setAttributeNode(att);
                var att = document.createAttribute('class');
                    att.value = "msg-box";
                    divMsgBox.setAttributeNode(att);
                var sideBar = document.getElementById('side-bar');
                    sideBar.appendChild(divMsgBox);
                               
                    /* p Element Created on message-box */
                    var pElement = document.createElement('p');
                    var att = document.createAttribute('Id');
                        att.value = "contact-error-msg";
                        pElement.setAttributeNode(att);
                    var att = document.createAttribute('class');
                        att.value = "contact-error-msg hidden";
                        pElement.setAttributeNode(att);
                    var msgBox = document.getElementById('msg-box');
                        msgBox.appendChild(pElement);

                    var pElement = document.createElement('p');
                    var att = document.createAttribute('Id');
                        att.value = "contact-send-msg";
                        pElement.setAttributeNode(att);
                    var att = document.createAttribute('class');
                        att.value = "contact-send-msg hidden";
                        pElement.setAttributeNode(att);
                    var msgBox = document.getElementById('msg-box');
                        msgBox.appendChild(pElement);

                    var pElement = document.createElement('p');
                    var att = document.createAttribute('Id');
                        att.value = "contact-warning-msg";
                        pElement.setAttributeNode(att);
                    var att = document.createAttribute('class');
                        att.value = "contact-warning-msg hidden";
                        pElement.setAttributeNode(att);
                    var msgBox = document.getElementById('msg-box');
                        msgBox.appendChild(pElement);

                clicked = 3;
                showSideBar();
            } else {
                boxCleaner();
                }
        }
    }());    

    /* DOM Auto-Events */

    setTimeout(
        function(){ 
            /* Spinner DOM Elements*/
            var spinner = document.getElementById("spinner");
            var att = document.createAttribute('class');
            att.value = "destroy";
            /*element2.setAttributeNode(att);*/
            spinner.setAttributeNode(att);
        }, 2000);
    
    setTimeout(
        function(){ 
    var leftArrow = document.getElementById('left-arrow');
        leftArrow.removeAttribute('class');
        var arrowClass = document.createAttribute('class');
        arrowClass.value = "arrow vanish";
        leftArrow.setAttributeNode(arrowClass);

    var wlcText = document.getElementById('wlc-text');
        wlcText.removeAttribute('class');
    var wlcTextClass = document.createAttribute('class');
        wlcTextClass.value = "vanish";
        wlcText.setAttributeNode(wlcTextClass);

            setTimeout(function(){
                arrowClass.value = 'destroy';
            var main = document.getElementById('main');
            var arroBox = document.getElementById('arrow-box');
                main.removeChild(arroBox);
                wlcTextClass.value = 'destroy';
            var wlc = document.getElementById('wlc');
            var wlcClass = document.createAttribute('class');
                wlcClass.value = "bienvenida logo-show";
                wlc.setAttributeNode(wlcClass);
            var foo = document.getElementById('foo');
            var fooClass= document.createAttribute('class');
                fooClass.value = "foo";
                foo.setAttributeNode(fooClass);
            }, 3000);

        }, 5000);
    
    /* DOM EventListeners */

    document.getElementById("btn-about").onclick = function(){
        hiddenSideBar();
        content = 1;
        setTimeout(function(){
            boxCleaner();
        },500);
    }
    document.getElementById("btn-briefcase").onclick = function(){
        hiddenSideBar();
        content = 2;
        setTimeout(function(){
            boxCleaner();
        },500);
    }
    document.getElementById("btn-contact").onclick = function(){
        hiddenSideBar();
        content = 3;
        setTimeout(function(){
            boxCleaner();
        },500);
    }
    document.getElementById('wlc').onclick = hiddenSideBar;
    document.getElementById('foo').onclick = hiddenSideBar;  
}