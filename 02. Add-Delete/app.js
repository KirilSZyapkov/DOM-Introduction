function addItem() {
    let inputText = document.getElementById('newText').value;
    let ulList = document.getElementById('items');

    let liElement = document.createElement('li');
    let deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]';

    if(inputText.length === 0) return;

    liElement.textContent = inputText;
    liElement.appendChild(deleteBtn);
    ulList.appendChild(liElement);
    deleteBtn.addEventListener('click', deleteLi);

    function deleteLi(){
        liElement.remove();
    }
}