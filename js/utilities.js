function inputFiledValueById(inputId){
    const inputFiled = document.getElementById(inputId);
    const inputFiledValueString = inputFiled.value;
    const inputFiledValue = parseFloat(inputFiledValueString);
    inputFiled.value = '';
    return inputFiledValue;
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

function setElementValueById(elementId, newValue){
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}