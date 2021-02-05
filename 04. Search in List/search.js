function search() {
    let inputText = document.getElementById('searchText').value;
    let ulList = document.querySelectorAll('ul>li');
    let result = document.getElementById('result');
    inputText = inputText.toLocaleLowerCase();
    let count = 0;

    for(let element of ulList) {
        let txt = element.textContent.toLocaleLowerCase();
        if (txt.includes(inputText) && inputText !== '') {
            count++
            element.style.fontWeight = 'bold';
            element.style.textDecoration = 'underline';
        } else {
            element.style.fontWeight = '';
            element.style.textDecoration = '';
        }

    }
    result.textContent = `${count} matches found`;
}
