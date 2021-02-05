function extractText() {
    let list = Array.from(document.querySelectorAll('li'));
    let result = document.getElementById('result');

    list.forEach(el => {
        result.textContent += (el.textContent) + '\n';
    })
}