function getInputValueByID(id){
    let value = document.getElementById(id).value;
    value = parseFloat(value);
    return value;
}

function getInnerTextByID(id){
    let text = document.getElementById(id).innerText;
    text = parseFloat(text);
    return text;
}

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}
