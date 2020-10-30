var queryString = "";
var helpIsVisible = false;
var markdownText = ""

document.addEventListener("readystatechange", loadEvents, false);
function loadEvents(event){
    if(document.readyState=="complete"){
        filtrateQueryString();
        createHelp();
    }
    
}
function helpEvents() {
    document.getElementById("helpIcon").addEventListener("click", showOnlineHelp, false);
    document.getElementById("closeHelp").addEventListener("click", hideOnlineHelp, false);
    window.addEventListener("click", hideOnlineHelpOut);
}
function showOnlineHelp(event) {
    document.getElementById("divHelpIcon").style.right = "-50%";
    document.getElementById("divHelp").style.right = "0";
    helpIsVisible = true;
}

function hideOnlineHelp(event) {
    document.getElementById("divHelpIcon").style.right = "1%";
    document.getElementById("divHelp").style.right = "-50%";
    helpIsVisible = false;
}

function hideOnlineHelpOut(event) {
    if(helpIsVisible){
        if(!document.getElementById("divHelp").contains(event.target) && !document.getElementById("divHelpIcon").contains(event.target)){
            hideOnlineHelp();
        }
    }
    
}

function createHelp() {
    if(queryString!=="") {
        var divHelpIcon = document.createElement("div");
        divHelpIcon.setAttribute("id","divHelpIcon");

        divHelpIcon.innerHTML = "<svg id=\"helpIcon\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-question-circle-fill\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z\"/></svg>";
        document.getElementsByTagName("body")[0].insertBefore(divHelpIcon, document.getElementsByTagName("body")[0].firstChild);
        
        var divHelp = document.createElement("div");
        divHelp.setAttribute("id","divHelp");
        
        var divHeader = document.createElement("div");
        divHeader.setAttribute("id","divHeader");
        var headerDivHelp = document.createElement("header");
        headerDivHelp.setAttribute("id","headerDivHelp");
       // var txtHeader = document.createTextNode("Cerrar ayuda X");
        loadJson();
        //headerDivHelp.appendChild(txtHeader);
        divHeader.innerHTML="<svg id=\"closeHelp\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-x-square-fill\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z\"/></svg>";
        divHeader.append(headerDivHelp);
        divHelp.appendChild(divHeader);

        

        document.getElementsByTagName("body")[0].insertBefore(divHelp, document.getElementsByTagName("body")[0].firstChild.nextSibling);
        helpEvents();
     }
}

function createMarkdownContent() {
    if(markdownText==""){
        markdownText = " ## No existe ayuda para esta página. \n ###### Estamos trabajando en ello. Disculpe las molestias. \n ![Trabajando](../gifs/trabajando.gif)"; 
    }
    divHelpMarkdown = document.createElement("div");
        divHelpMarkdown.setAttribute("id","divHelpTxt")
        //markdownText = '# Lista : \n- Elemento 1\n    - __Elemento 1.1__ \n- Elemento 2.\n\n# Lista : \n- Elemento 1\n    - __Elemento 1.1__ \n- Elemento 2.\n\n# Lista : \n- Elemento 1\n    - __Elemento 1.1__ \n- Elemento 2.\n\n# Lista : \n- Elemento 1\n    - __Elemento 1.1__ \n- Elemento 2.\n\n# Lista : \n- Elemento 1\n    - __Elemento 1.1__ \n- Elemento 2.\n\n# Lista : \n- Elemento 1\n    - __Elemento 1.1__ \n- Elemento 2.\n\n# Lista : \n- Elemento 1\n    - __Elemento 1.1__ \n- Elemento 2.\n\n# Lista : \n- Elemento 1\n    - __Elemento 1.1__ \n- Elemento 2.\n\n# Lista : \n- Elemento 1\n    - __Elemento 1.1__ \n- Elemento 2.\n\n# Lista : \n- Elemento 1\n    - __Elemento 1.1__ \n- Elemento 2.\n\n# Lista : \n- Elemento 1\n    - __Elemento 1.1__ \n- Elemento 2.\n\n# Lista : \n- Elemento 1\n    - __Elemento 1.1__ \n- Elemento 2.\n'
        divHelpMarkdown.innerHTML = marked(markdownText);
        document.getElementById("divHelp").appendChild(divHelpMarkdown);
    /*switch (queryString) {
        case "Home/Privacy":
            markdownText = " ## Ayuda para Privacy ![PrivacidadLogo](../img/privacidad.png) \n ![Privacy](../img/privacidad.png) \n ### Tu privacidad nos importa";
            break;
        case "Home/Pagina1":
            markdownText = "### Añadir nuevo elemento \n ___ \n 1. Haga click en ![imgtxt](../img/AddButton.png) \n 2. Espere mientras cargan los datos ![imgtxt](../gifs/cargando.gif)  \n 3. Rellene los campos \n 4. Asegúrese de que los valores son correctos ![imgtxt-sm](../gifs/ok.gif) \n 4. Si no te ha servido, busca en [Google](http://www.google.com) \n\n### Modificar elemento existente \n ___ \n 1. Haga click en ![imgtxt](../img/EditButton.png) \n 2. Espere mientras cargan los datos ![imgtxt](../gifs/cargando.gif)  \n 3. Rellene los campos \n 4. Asegúrese de que los valores son correctos ![imgtxt-sm](../gifs/ok.gif) \n 4. Si no te ha servido, busca en [Google](http://www.google.com) \n\n### Borrar elemento existente \n ___ \n 1. Haga click en ![imgtxt](../img/DeleteButton.png) \n 2. Espere mientras cargan los datos ![imgtxt](../gifs/cargando.gif)  \n 3. Rellene los campos \n 4. Asegúrese de que los valores son correctos ![imgtxt-sm](../gifs/ok.gif) \n 4. Si no te ha servido, busca en [Google](http://www.google.com)";
            break;
        case "Home/Pagina2":
            markdownText = " ## Ayuda para Página 2";
            break;
        default:
            markdownText = " ## No existe ayuda para esta página. \n ###### Estamos trabajando en ello. Disculpe las molestias. \n ![Trabajando](../gifs/trabajando.gif)";
            break;
    }*/
}

const urlParams = new URLSearchParams(window.location.pathname);
//alert("urlParams: "+urlParams);
function filtrateQueryString() {
    var urlParamsToString = urlParams.toString();
    var queryStringParts = urlParamsToString.split("%2F");
    queryStringParts.shift();
    queryStringParts[queryStringParts.length - 1] = queryStringParts[queryStringParts.length - 1].replace("=","");
    /*for(p in queryStringParts) {
        alert(queryStringParts[p]);
    }
    alert(queryStringParts.length);*/
    for(var i = 0; i < queryStringParts.length ; i ++ ) {
        
            queryString += queryStringParts[i];
         
    }

    //alert(queryString);
   // fetch('https://localhost:5001/api/HelpContent');
   /*const xhr = new XMLHttpRequest();
   xhr.open('GET', 'localhost:5001/api/HelpContent');
   xhr.setRequestHeader('Content-Type', 'Authorization');
   xhr.send();
   alert(xhr.response);*/
}
/*loadJson("https://localhost:5001/api/HelpContent", fApplication);   
function loadJson(url, cfunction) {
         var request = new XMLHttpRequest();
         request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200){  
                        cfunction(this);
                        console.log(request);
                        var resp = JSON.parse(request.responseText);
                        resp0 = resp[0]
                        alert(typeof(resp0));
                        //alert("b :" +request.responseText[0]);
                       for(prop in resp) {
                            alert(prop);
                        }
                }     
            };      
            request.open("GET", url, true);     
            request.send(); 
            
        }  
function fApplication(request){  }*/
function loadJson(){
	var peticion=new XMLHttpRequest();
	peticion.addEventListener("readystatechange",loadJsonResponse,false);
	peticion.open("GET","https://localhost:5001/api/HelpContent/"+queryString,true);
	peticion.send(null);
}

function loadJsonResponse(event){
	
    if (event.target.readyState == 4) {
        if(event.target.status == 200) {
            respuesta = JSON.parse(event.target.responseText);
            markdownText = respuesta["helpContentMD"];
            createMarkdownContent();
            
        }else{
            createMarkdownContent();
        }
    }
    
        
}


/*//var urlParams = window.location;
alert(urlParams);
alert("toString : "+urlParams.toString());
alert(typeof(urlParams));
/*for(prop in urlParams) {
    alert(prop+": "+urlParams[prop]);
}
/*filtrarURL();
alert(urlParams);*/

/*function filtrarURL(){
    URLparts = urlParams.split("/");
    while(URLparts[0]);
}*/
