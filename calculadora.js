let displayValue = "";

function addToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Erro";
    }
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = "";
}

function clearLast() {
    displayValue = displayValue.slice(0, -1)
    document.getElementById("display").value = displayValue
}