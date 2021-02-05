function editElement(text, match, replacer) {
    let inputText = text.textContent;
    let mather = new RegExp(match, 'g');
    let outPut = inputText.replace(mather, replacer);

    text.textContent = outPut;
}

function editElement(text, match, replacer) {
    let inputText = text.textContent;
    while (inputText.includes(match)) {
        inputText = inputText.replace(match, replacer);
    }
    text.textContent = inputText;
}