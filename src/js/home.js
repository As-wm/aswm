window.onload = function(){
    /* VARIABLES */
    var clicked = 0;
    var content = 0;    
    (function(){

        hiddenSideBar = function(){
            /* SideBar Listener */
            var hiddenBar = document.getElementById("side-bar");
                hiddenBar.removeAttribute("class");
            var att = document.createAttribute("class");
                att.value = "side-bar trasladed";            
                hiddenBar.setAttributeNode(att);
            var main = document.getElementById('main');
                main.setAttribute("class","whole-space");                       
        }

        showSideBar = function() {
            /* Add class show to side-bar */
            var showBar = document.getElementById("side-bar");
                    showBar.removeAttribute("class");
                var att = document.createAttribute("class");
                    att.value = "side-bar show";
                    showBar.setAttributeNode(att);                  
                var main = document.getElementById('main');
                    main.removeAttribute("class");
                var att = document.createAttribute("class");
                    att.value = "main";
                    main.setAttributeNode(att);                 
        } 

 
        
        boxCleaner = function(){
            if(clicked==0){
                if (content==1) {aboutBar();} 
                    else if (content==2){briefcaseBar();}
                         else if (content==3) {contactBar();}
                } else if (clicked==1) {
                    var proBox = document.getElementById('profile-box');
                            proBox.setAttribute('class','profile-box hidden');
                                            
                    clicked = 0;
                    boxCleaner();
                } else if (clicked==2) {
                        var bfcBox = document.getElementById('briefcase-box');
                            bfcBox.setAttribute('class','briefcase-box hidden');
                    clicked = 0;
                    boxCleaner();
                } else if (clicked==3) {
                    var bfcBox = document.getElementById('contact-box');
                        bfcBox.setAttribute('class','contact-box hidden');
                        clicked = 0;
                        boxCleaner();      
            }
        }

        aboutBar = function(){
            
            if(clicked == 0) {
                /* Div Element Created on side-bar */
                var proBox = document.getElementById('profile-box');
                    proBox.setAttribute('class','profile-box');
                clicked = 1;
                showSideBar();
            } else {
                boxCleaner();
            }
        }  

        briefcaseBar = function(){
                        
            if(clicked==0) { 
                var bfcBox = document.getElementById('briefcase-box');
                    bfcBox.setAttribute('class','briefcase-box');

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
                var bfcBox = document.getElementById('contact-box');
                    bfcBox.setAttribute('class','contact-box');

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
                wlcClass.value = "welcome logo-show";
                wlc.setAttributeNode(wlcClass);
            var foo = document.getElementById('foo');
            var fooClass= document.createAttribute('class');
                fooClass.value = "foo";
                foo.setAttributeNode(fooClass);
            }, 3000);

        }, 5000);
    
    /* DOM EventListeners */

    document.getElementById("btn-about").onclick = function(){
        if(screen.width>1024) {
            hiddenSideBar();
            content = 1;
            setTimeout(function(){
                boxCleaner();
            },500);
        }
    }
    document.getElementById("btn-briefcase").onclick = function(){
        if(screen.width>1024) {
            hiddenSideBar();
            content = 2;
                setTimeout(function(){
                    boxCleaner();
                },500);
            }
        }
    document.getElementById("btn-contact").onclick = function(){
        if(screen.width>1024) {
            hiddenSideBar();
            content = 3;
            setTimeout(function(){
                boxCleaner();
                },500);
            }
        }
    
        document.getElementById('wlc').onclick = function(){
            if(screen.width>1024) {
                hiddenSideBar();
            }
        }
        document.getElementById('foo').onclick = function(){
            if(screen.width>1024) {
                hiddenSideBar();
            }
        }
        
    
}