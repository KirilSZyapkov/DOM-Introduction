function addItem() {
    const text = document.getElementById('newItemText');
    const val = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');

    let option = document.createElement('option');
    let node = document.createTextNode(text.value);
    let nodeValue = document.createTextNode(val.value);
    option.appendChild(node);
    option.appendChild(nodeValue);
    menu.appendChild(option);

    text.value = '';
    val.value = '';

}