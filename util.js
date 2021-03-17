function reverseText(text) {
    let newText = "";

    for (var i = text.length - 1; i >= 0; i--) {
        newText += text[i];
    }

    return newText;
}

function cleanText(text){
    //Cleaning text to check for palindrome
    let regex = /[^A-Za-z0-9]/g;
    text = text.replace(new RegExp("á|à|ã|â|ä|À|Á|Ã|Â|Ä","g"), "a");
    text = text.replace(new RegExp("é|è|ê|ë|É|È|Ê|Ë","g"), "e");
    text = text.replace(new RegExp("í|ì|î|ï|Í|Ì|Î|Ï","g"), "i");
    text = text.replace(new RegExp("ó|ò|ô|õ|ö|Ó|Ò|Ô|Õ|Ö","g"), "o");
    text = text.replace(new RegExp("ú|ù|û|ü|Ú|Ù|Û|Ü","g"), "u");
    return text.toLowerCase().replace(regex, '') + "";
}

module.exports = { reverseText, cleanText };