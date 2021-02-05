function addItem() {
    let ulList = document.getElementById('items');
    let inputText = document.getElementById('newItemText').value;

    let li = document.createElement('li');
    li.textContent = inputText;
    if(inputText !== ""){
        ulList.appendChild(li);
    }
}