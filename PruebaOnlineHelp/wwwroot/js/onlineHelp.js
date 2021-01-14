var queryString = "";
var helpIsVisible = false;
var markdownText = ""
var encontrado = false;
var intentos = 0;
var llamada = false;

document.addEventListener("readystatechange", loadEvents, false);
function loadEvents(event){
    if(document.readyState=="complete"){
        filtrateQueryString();
        createHelp();
    }  
}

function helpEvents() {
    document.getElementById("helpIcon").addEventListener("click", showOnlineHelp, false);
    window.addEventListener("click", hideOnlineHelpOut);
}

function showOnlineHelp(event) {
    loadJson();
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
        
        document.getElementsByTagName("body")[0].insertBefore(divHelp, document.getElementsByTagName("body")[0].firstChild.nextSibling);
        helpEvents();
     }
}

function createMarkdownContent() {
    if(markdownText==""){
        markdownText = " ## No existe ayuda para esta página. \n ###### Estamos trabajando en ello. Disculpe las molestias. \n ![Trabajando](../gifs/trabajando.gif)"; 
    }
    pdfDownload = document.createElement("button");
    pdfDownload.setAttribute("class","btn btn-sm btn-danger");
    pdfDownload.setAttribute("id","pdfDownload");
    pdfDownload.innerHTML="Descargar toda la ayuda en PDF";
    divHelpMarkdown = document.createElement("div");
    divHelpMarkdown.setAttribute("id","divHelpTxt")
    divHelpMarkdown.innerHTML = marked(markdownText);
    document.getElementById("divHelp").appendChild(pdfDownload);
    document.getElementById("divHelp").appendChild(divHelpMarkdown);

    pdfDownloadEvents();
}

function pdfDownloadEvents() {
   $('#pdfDownload').click(function () {
       window.open("https://localhost:7003/Home/DownloadHelp")
   })
}



const urlParams = new URLSearchParams(window.location.pathname);

function filtrateQueryString() {
    
    var urlParamsToString = urlParams.toString();
    var queryStringParts = urlParamsToString.split("%2F");
    queryStringParts.shift();
    queryStringParts[queryStringParts.length - 1] = queryStringParts[queryStringParts.length - 1].replace("=","");
    while(encontrado == false && ((queryStringParts.length - intentos) > 0)) {
        queryString ="";
        for(var i = 0; i < queryStringParts.length - intentos ; i ++ ) {
            queryString += queryStringParts[i];
        }
        searchHelp();
        intentos ++;
    }
}

function searchHelp() {
    var peticion=new XMLHttpRequest();
	peticion.addEventListener("readystatechange",searchHelpResponse,false);
	peticion.open("GET","https://localhost:6001/api/HelpContent/"+queryString,false);
	peticion.send(null);
}

function searchHelpResponse(event) {
    if (event.target.readyState == 4 && event.target.status == 200) {
           encontrado = true;
    }      
}

function loadJson(){
    if(llamada == false) {
        var peticion=new XMLHttpRequest();
        peticion.addEventListener("readystatechange",loadJsonResponse,false);
        peticion.open("GET","https://localhost:6001/api/HelpContent/"+queryString,true);
        peticion.send(null);
        llamada = true;
    }
}

function loadJsonResponse(event){
	
    if (event.target.readyState == 4) {
        if(event.target.status == 200) {
            respuesta = JSON.parse(event.target.responseText);
            markdownText = respuesta["helpContentMD"];
            createMarkdownContent();
            
        }else {
            createMarkdownContent();
        }
    }      
}
