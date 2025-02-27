function getInputValueByID(id){
    let value = document.getElementById(id).value;
    value = parseFloat(value);
    return value;
}