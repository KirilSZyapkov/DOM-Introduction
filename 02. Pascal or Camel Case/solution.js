function solve() {
    let inputText = document.getElementById('text').value;
    let toConvert = document.getElementById('naming-convention').value;
    let resultText = document.getElementById('result');

    let action = {
        'Camel Case'(text) {
            let firstWord = text.shift();
            for (let word of text) {
                let newWord = '';
                let letter = word.substring(0, 1);
                let rest = word.substring(1);
                letter = letter.toLocaleUpperCase();
                newWord = letter + rest;
                firstWord += newWord;
            }
            return firstWord;
        },
        'Pascal Case'(text) {
            let line = '';
            for (let word of text) {
                let newWord = '';
                let letter = word.substring(0, 1);
                let rest = word.substring(1);
                letter = letter.toLocaleUpperCase();
                newWord = letter + rest;
                line += newWord;
            }
            return line;
        },
    };

    let result = '';
    inputText = inputText.toLocaleLowerCase().split(' ');
    if (toConvert !== 'Camel Case' && toConvert !== 'Pascal Case') {
        result = "Error!";
    } else {
        result = action[toConvert](inputText);
    }
    resultText.textContent = result;
}


