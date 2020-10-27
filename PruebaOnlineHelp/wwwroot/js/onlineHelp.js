var queryString;

document.addEventListener("readystatechange", loadEvents, false);
function loadEvents(event){
    if(document.readyState=="complete"){
        createHelp();
        document.getElementById("helpIcon").addEventListener("click", showOnlineHelp, false);
        document.getElementById("headerDivHelp").addEventListener("click", hideOnlineHelp, false);
    }
    
}

function showOnlineHelp(event) {
    //document.getElementById("helpIcon").style.display = "none";
   // document.getElementById("divHelp").style.display = "block";
    document.getElementById("divHelpIcon").style.right = "-50%";
    document.getElementById("divHelp").style.right = "0";
}

function hideOnlineHelp(event) {
    //document.getElementById("helpIcon").style.display = "block";
    //document.getElementById("divHelp").style.display = "none";
    document.getElementById("divHelpIcon").style.right = "1%";
    document.getElementById("divHelp").style.right = "-50%";
}

function createHelp() {
    if(urlParams.toString()!=="") {
        var divHelpIcon = document.createElement("div");
        divHelpIcon.setAttribute("id","divHelpIcon");
        var helpIcon = document.createElement("button")
        helpIcon.setAttribute("id","helpIcon");
        divHelpIcon.appendChild(helpIcon);
        document.getElementsByTagName("body")[0].insertBefore(divHelpIcon, document.getElementsByTagName("body")[0].firstChild);
        
        var divHelp = document.createElement("div");
        divHelp.setAttribute("id","divHelp");
        
        var divHeader = document.createElement("div");
        divHeader.setAttribute("id","divHeader");
        var headerDivHelp = document.createElement("header");
        headerDivHelp.setAttribute("id","headerDivHelp");
        var txtHeader = document.createTextNode("Cerrar ayuda X");
        
        headerDivHelp.appendChild(txtHeader);
        divHeader.append(headerDivHelp);
        divHelp.appendChild(divHeader);

        divHelpMarkdown = document.createElement("div");
        divHelpMarkdown.setAttribute("id","divHelpTxt")
        markdownText = '# Lista : \n- Elemento 1\n    - __Elemento 1.1__ \n- Elemento 2.\n\n# Lista : \n- Elemento 1\n    - __Elemento 1.1__ \n- Elemento 2.\n\n# Lista : \n- Elemento 1\n    - __Elemento 1.1__ \n- Elemento 2.\n\n# Lista : \n- Elemento 1\n    - __Elemento 1.1__ \n- Elemento 2.\n\n# Lista : \n- Elemento 1\n    - __Elemento 1.1__ \n- Elemento 2.\n\n# Lista : \n- Elemento 1\n    - __Elemento 1.1__ \n- Elemento 2.\n\n# Lista : \n- Elemento 1\n    - __Elemento 1.1__ \n- Elemento 2.\n\n# Lista : \n- Elemento 1\n    - __Elemento 1.1__ \n- Elemento 2.\n\n# Lista : \n- Elemento 1\n    - __Elemento 1.1__ \n- Elemento 2.\n\n# Lista : \n- Elemento 1\n    - __Elemento 1.1__ \n- Elemento 2.\n\n# Lista : \n- Elemento 1\n    - __Elemento 1.1__ \n- Elemento 2.\n\n# Lista : \n- Elemento 1\n    - __Elemento 1.1__ \n- Elemento 2.\n'
        divHelpMarkdown.innerHTML = marked(markdownText);
        divHelp.appendChild(divHelpMarkdown);

        document.getElementsByTagName("body")[0].insertBefore(divHelp, document.getElementsByTagName("body")[0].firstChild.nextSibling);


    } else {
        alert("no crear");
    }
}

const urlParams = new URLSearchParams(window.location.search);

function filtrateQueryString() {
    var urlParamsToString = urlParams.toString();
    var queryStringParts = urlParamsToString.split("/")
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
