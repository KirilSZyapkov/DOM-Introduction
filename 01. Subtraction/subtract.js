function subtract() {
    let numA = Number(document.getElementById('firstNumber').value);
    let numB = Number(document.getElementById('secondNumber').value);
    let result = numA - numB;

    document.getElementById('result').textContent = result;
}