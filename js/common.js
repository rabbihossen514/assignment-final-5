function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}

function getInputFieldInnerTextById(id) {
    const inputValue = document.getElementById(id).innerText;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}