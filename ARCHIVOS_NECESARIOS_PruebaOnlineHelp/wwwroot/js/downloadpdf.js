function makeHelp(respuesta) {
    var cont = document.createElement("div");
    for(var i = 0; i < respuesta.length; i ++) {
        var h = document.createElement("div");
        h.innerHTML = marked(respuesta[i]["helpContentMD"]);
        cont.appendChild(h);

    }
    document.getElementsByTagName("body")[0].appendChild(cont);       
}

$.ajax({
    //Cambiar a type: POST si necesario
    type: "GET",
    // Formato de datos que se espera en la respuesta
    dataType: "json",
    // URL a la que se enviará la solicitud Ajax
    url: "https://localhost:5001/api/HelpContent",
})
.done(function( data, textStatus, jqXHR ) {
    if ( console && console.log ) {
        console.log( "La solicitud se ha completado correctamente." );
    }
    while(document.getElementsByTagName("body")[0].firstChild)
    {
        document.getElementsByTagName("body")[0].removeChild(document.getElementsByTagName("body")[0].firstChild);
    }
    makeHelp(data);
    setTimeout(function(){
        window.print();
    },3000);
})
    .fail(function( jqXHR, textStatus, errorThrown ) {
        if ( console && console.log ) {
            console.log( "La solicitud a fallado: " +  textStatus);
        }
});