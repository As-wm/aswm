window.onload = function(){
    /* Spinner DOM Elements*/
    (function(){
        var element2 = document.createElement('div');
        var id =  document.createAttribute('Id');
        id.value = "spinner";
        element2.setAttributeNode(id);
        var vody = document.getElementsByTagName('body');
        vody.appendChild = element2;
        var nav = document.getElementById('nav');
        document.body.insertBefore(element2, nav);

        var element = document.createElement('div');
        var att = document.createAttribute('class');
        att.value = "loader";
        element.setAttributeNode(att);
        element.innerHTML = 'Loading...';
        var spinner = document.getElementById('spinner');
        spinner.appendChild(element);

        setTimeout(
            function(){ 
                var spinner = document.getElementById("spinner");
                var att = document.createAttribute('class');
                att.value = "destroy";
                element2.setAttributeNode(att);
            }, 2000);
    }());    

    /* DOM Events */
    document.getElementById("btn-about").onclick = function(){
        var showBar =document.getElementById("side-bar");
        showBar.removeAttribute("class");
        var att = document.createAttribute("class");
        att.value = "side-bar show";
        showBar.setAttributeNode(att);
    }  
    
    document.getElementById('arrow-box').onclick = clicked;
    document.getElementById('left-arrow').onclick = clicked;
    document.getElementById('wlc').onclick = clicked;
    document.getElementById('foo').onclick = clicked;
    function clicked(){
        var showBar =document.getElementById("side-bar");
        showBar.removeAttribute("class");
        var att = document.createAttribute("class");
        att.value = "side-bar hidden";
        showBar.setAttributeNode(att);
    }
    
    
}


