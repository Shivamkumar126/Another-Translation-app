var btn = document.querySelector("#btn-translate");
var inputText = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/pig-latin.json";

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error){
    console.log("error occured", error);
    alert("something went wrong with the server")
}

function clickHandler(){

    
    var element =  inputText.value;

    fetch(getTranslationURL(element))
    .then(response => response.json())
    .then(json => {
        var trasnlated = json.contents.translated;
        outputDiv.innerTxt = translated;
    })
    .catch(errorHandler)
}


btn.addEventListener("click", clickHandler);

