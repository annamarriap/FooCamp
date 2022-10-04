

const fakeapi = {
    "hero": {
        "maintext": "Mypets",
        "body": "This is a body"
    }
}
function createHTML (data) {
    let rawTemplate = document.getElementById("templateHbs").innertHTML;
    let compliledTemplate = Handlebars.compile(rawTemplate);
    let generatedHTML = compliledTemplate(data);
    document.getElementById(mainTemplate).innerHTML = generatedHTML;
}

createHTML(fakeapi);